import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const NOTIFICATIONS = [
  {
    id: '1',
    type: 'reminder',
    title: 'Appointment Reminder',
    message: 'Your haircut with Alex is tomorrow at 2:00 PM',
    time: '1h ago',
    read: false,
  },
  {
    id: '2',
    type: 'promo',
    title: 'Special Offer',
    message: '20% off on beard grooming this weekend!',
    time: '3h ago',
    read: false,
  },
  {
    id: '3',
    type: 'update',
    title: 'Booking Confirmed',
    message: 'Your appointment has been confirmed',
    time: '1d ago',
    read: true,
  },
];

export default function NotificationsScreen() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'reminder':
        return 'time-outline';
      case 'promo':
        return 'pricetag-outline';
      case 'update':
        return 'checkmark-circle-outline';
      default:
        return 'notifications-outline';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.clearAll}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {NOTIFICATIONS.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[styles.notificationCard, !notification.read && styles.unread]}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={getIcon(notification.type) as any} size={24} color={colors.primary.main} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {!notification.read && <View style={styles.unreadDot} />}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
  },
  clearAll: {
    color: colors.primary.main,
    fontSize: 14,
  },
  content: {
    padding: spacing.lg,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background.secondary,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  unread: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primary.main,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  notificationMessage: {
    ...typography.caption,
    color: colors.text.secondary,
    marginTop: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: colors.text.tertiary,
    marginTop: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary.main,
    marginLeft: spacing.sm,
  },
});
