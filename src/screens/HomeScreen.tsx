import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>MyStyles</Text>
        <Text style={styles.subtitle}>Your Personal Barber</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointment</Text>
          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentTime}>Tomorrow, 2:00 PM</Text>
            <Text style={styles.appointmentName}>Classic Haircut</Text>
            <Text style={styles.appointmentBarber}>with Alex at StyleCuts</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Book</Text>
          <View style={styles.services}>
            <TouchableOpacity style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>✂️</Text>
              <Text style={styles.serviceName}>Haircut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>🧔</Text>
              <Text style={styles.serviceName}>Beard Trim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>💆</Text>
              <Text style={styles.serviceName}>Full Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h1, color: colors.primary.main, textAlign: 'center', marginTop: spacing.lg },
  subtitle: { ...typography.body, color: colors.text.tertiary, textAlign: 'center', marginTop: spacing.xs, marginBottom: spacing.xl },
  section: { marginBottom: spacing.xl },
  sectionTitle: { ...typography.h3, color: colors.text.primary, marginBottom: spacing.md },
  appointmentCard: { backgroundColor: colors.background.secondary, borderRadius: 16, padding: spacing.lg, borderLeftWidth: 4, borderLeftColor: colors.primary.main },
  appointmentTime: { ...typography.caption, color: colors.primary.main, fontWeight: '600' },
  appointmentName: { ...typography.h3, color: colors.text.primary, marginTop: spacing.xs },
  appointmentBarber: { ...typography.body, color: colors.text.tertiary, marginTop: spacing.xs },
  services: { flexDirection: 'row', justifyContent: 'space-between' },
  serviceCard: { backgroundColor: colors.background.secondary, borderRadius: 16, padding: spacing.lg, alignItems: 'center', width: '30%' },
  serviceIcon: { fontSize: 32, marginBottom: spacing.sm },
  serviceName: { ...typography.caption, color: colors.text.primary, textAlign: 'center' },
});
