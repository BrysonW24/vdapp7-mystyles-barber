import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function ComponentShowcaseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Component Showcase</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Typography</Text>
          <Text style={[typography.h1, { color: colors.text.primary }]}>Heading 1</Text>
          <Text style={[typography.h2, { color: colors.text.primary }]}>Heading 2</Text>
          <Text style={[typography.h3, { color: colors.text.primary }]}>Heading 3</Text>
          <Text style={[typography.body, { color: colors.text.secondary }]}>Body Text</Text>
          <Text style={[typography.caption, { color: colors.text.tertiary }]}>Caption Text</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.colorGrid}>
            <View style={[styles.colorBox, { backgroundColor: colors.primary.main }]}>
              <Text style={styles.colorLabel}>Primary</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: colors.accent.success }]}>
              <Text style={styles.colorLabel}>Success</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: colors.accent.warning }]}>
              <Text style={styles.colorLabel}>Warning</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: colors.accent.error }]}>
              <Text style={styles.colorLabel}>Error</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  colorBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
