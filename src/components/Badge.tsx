import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing } from '../theme';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
  style?: ViewStyle;
}

export default function Badge({ label, variant = 'primary', size = 'medium', style }: BadgeProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'success':
        return colors.accent.success;
      case 'warning':
        return colors.accent.warning;
      case 'error':
        return colors.accent.error;
      default:
        return colors.primary.main;
    }
  };

  return (
    <View
      style={[
        styles.badge,
        size === 'small' && styles.badgeSmall,
        { backgroundColor: getBackgroundColor() },
        style,
      ]}
    >
      <Text style={[styles.label, size === 'small' && styles.labelSmall]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeSmall: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  labelSmall: {
    fontSize: 10,
  },
});
