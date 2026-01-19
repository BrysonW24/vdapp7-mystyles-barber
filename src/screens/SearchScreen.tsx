import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Find a Barber</Text>
        <View style={styles.barberCard}>
          <Text style={styles.barberName}>StyleCuts Studio</Text>
          <Text style={styles.barberInfo}>4.9★ • 2.1km • Open now</Text>
        </View>
        <View style={styles.barberCard}>
          <Text style={styles.barberName}>The Gentleman's Cut</Text>
          <Text style={styles.barberInfo}>4.8★ • 3.5km • Open now</Text>
        </View>
        <View style={styles.barberCard}>
          <Text style={styles.barberName}>Modern Barber Co</Text>
          <Text style={styles.barberInfo}>4.7★ • 4.2km • Closes 6PM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  barberCard: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  barberName: { ...typography.body, color: colors.text.primary, fontWeight: '600' },
  barberInfo: { ...typography.caption, color: colors.text.tertiary, marginTop: spacing.xs },
});
