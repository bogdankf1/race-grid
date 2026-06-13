// Circuits tab — port of the web /circuits page: search, track-type filter,
// list of circuits used this season with the series that race there.

import { useRouter } from 'expo-router'
import { Search } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { getCircuit, getCircuitTypeLabel, type Circuit } from '@/data/circuits'
import { t } from '@/lib/i18n'
import { tm } from '~/lib/strings'
import { CountryCode } from '~/components/CountryCode'
import { SeriesChip } from '~/components/SeriesChip'
import { useData } from '~/state/data'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

const TYPES = ['permanent', 'street', 'oval', 'mixed'] as const

interface CircuitRow {
  circuit: Circuit
  series: Array<{ id: string; shortName: string; color: string; textColor: string }>
}

export default function CircuitsScreen() {
  const { seriesList } = useData()
  const { locale } = useSettings()
  const { c } = useTheme()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState<string | null>(null)

  const rows = useMemo<CircuitRow[]>(() => {
    const seriesByCircuit = new Map<string, CircuitRow['series']>()
    for (const series of seriesList) {
      for (const event of series.events) {
        const list = seriesByCircuit.get(event.circuitId) ?? []
        if (!list.some((s) => s.id === series.id)) {
          list.push({
            id: series.id,
            shortName: series.shortName,
            color: series.color,
            textColor: series.textColor,
          })
        }
        seriesByCircuit.set(event.circuitId, list)
      }
    }
    const q = query.trim().toLowerCase()
    return [...seriesByCircuit.entries()]
      .map(([circuitId, series]) => ({ circuit: getCircuit(circuitId), series }))
      .filter((row): row is CircuitRow => Boolean(row.circuit))
      .filter(({ circuit }) => !typeFilter || circuit.type === typeFilter)
      .filter(
        ({ circuit }) =>
          !q ||
          circuit.name.toLowerCase().includes(q) ||
          circuit.country.toLowerCase().includes(q),
      )
      .sort((a, b) => a.circuit.name.localeCompare(b.circuit.name))
  }, [seriesList, query, typeFilter])

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      <View className="flex-row items-center gap-2 px-4 pb-2 pt-3">
        <Text className="flex-1 text-xl font-extrabold tracking-widest text-rg-text">
          {t('nav.circuits', locale)}
        </Text>
        <Text className="text-xs text-rg-text3">{rows.length}</Text>
      </View>

      <View className="mx-4 mb-2 flex-row items-center gap-2 rounded-xl border border-rg-border bg-rg-surface px-3">
        <Search size={14} color={c('text3')} />
        <TextInput
          className="flex-1 py-2 text-sm text-rg-text"
          placeholder={t('search.circuits', locale)}
          placeholderTextColor={c('text3')}
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View className="flex-row flex-wrap gap-2 px-4 pb-2">
        {[null, ...TYPES].map((type) => {
          const active = typeFilter === type
          return (
            <Pressable
              key={type ?? 'all'}
              onPress={() => setTypeFilter(type)}
              accessibilityRole="button"
              className={
                active
                  ? 'rounded-lg bg-rg-elevated border border-rg-border px-3 py-1.5'
                  : 'rounded-lg border border-rg-border px-3 py-1.5'
              }
            >
              <Text
                className={
                  active ? 'text-xs font-bold text-rg-text' : 'text-xs font-semibold text-rg-text3'
                }
              >
                {type ? getCircuitTypeLabel(type, locale) : tm('circuits.allTypes', locale)}
              </Text>
            </Pressable>
          )
        })}
      </View>

      <FlatList
        data={rows}
        keyExtractor={(row) => row.circuit.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ListEmptyComponent={
          <Text className="pt-16 text-center text-sm text-rg-text3">
            {t('search.noResults', locale)}
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/circuit/${item.circuit.id}`)}
            accessibilityRole="button"
            className="mb-1.5 rounded-xl border border-rg-card-border bg-rg-surface px-3 py-2.5"
          >
            <View className="flex-row items-center gap-1.5">
              <CountryCode code={item.circuit.countryCode} />
              <Text className="flex-1 text-sm font-semibold text-rg-text" numberOfLines={1}>
                {item.circuit.name}
              </Text>
            </View>
            <Text className="mt-0.5 text-xs text-rg-text3">
              {item.circuit.length} · {item.circuit.turns} {tm('circuit.turns', locale)} ·{' '}
              {getCircuitTypeLabel(item.circuit.type, locale)}
            </Text>
            <View className="mt-1.5 flex-row flex-wrap gap-1.5">
              {item.series.map((s) => (
                <SeriesChip
                  key={s.id}
                  shortName={s.shortName}
                  color={s.color}
                  textColor={s.textColor}
                />
              ))}
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}
