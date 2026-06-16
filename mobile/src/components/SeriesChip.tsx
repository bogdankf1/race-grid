// Port of the web SeriesChip (src/components/SeriesChip.tsx) to RN.

import { Pressable, Text } from 'react-native'

interface SeriesChipProps {
  shortName: string
  color: string
  textColor: string
  size?: 'sm' | 'md'
  active?: boolean
  onPress?: () => void
}

export function SeriesChip({
  shortName,
  color,
  textColor,
  size = 'sm',
  active = true,
  onPress,
}: SeriesChipProps) {
  const isSmall = size === 'sm'
  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: isSmall ? 6 : 8,
        borderWidth: active ? 0 : 1.5,
        borderColor: color,
        backgroundColor: active ? color : 'transparent',
        paddingVertical: isSmall ? 4 : 6,
        paddingHorizontal: isSmall ? 10 : 14,
      }}
    >
      <Text
        style={{
          color: active ? textColor : color,
          fontWeight: '700',
          letterSpacing: 0.5,
          fontSize: isSmall ? 11 : 13,
          lineHeight: isSmall ? 13 : 15,
        }}
      >
        {shortName}
      </Text>
    </Pressable>
  )
}
