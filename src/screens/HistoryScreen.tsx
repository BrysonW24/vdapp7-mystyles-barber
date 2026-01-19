import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const HISTORY = [
  {
    id: '1',
    service: 'Classic Haircut',
    barber: 'Alex',
    shop: 'StyleCuts',
    date: 'Jan 15, 2024',
    price: '$35',
    rating: 5,
  },
  {
    id: '2',
    service: 'Beard Trim',
    barber: 'Mike',
    shop: 'The Barber Shop',
    date: 'Jan 8, 2024',
    price: '$20',
    rating: 4,
  },
  {
    id: '3',
    service: 'Full Service',
    barber: 'Alex',
    shop: 'StyleCuts',
    date: 'Dec 28, 2023',
    price: '$55',
    rating: 5,
  },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Appointment History</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {HISTORY.map((item) => (
          <TouchableOpacity key={item.id} style={styles.historyCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.service}>{item.service}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={styles.details}>
              with {item.barber} at {item.shop}
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.rating}>
                {[...Array(item.rating)].map((_, i) => (
                  <Ionicons key={i} name="star" size={14} color={colors.accent.warning} />
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.rebookButton}>
              <Text style={styles.rebookText}>Book Again</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
  historyCard: {
    backgroundColor: colors.background.secondary,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  service: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  price: {
    color: colors.primary.main,
    fontWeight: '600',
  },
  details: {
    ...typography.caption,
    color: colors.text.secondary,
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
  },
  date: {
    ...typography.caption,
    color: colors.text.tertiary,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
  rebookButton: {
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary.main,
    alignItems: 'center',
  },
  rebookText: {
    color: colors.primary.main,
    fontWeight: '600',
  },
});
