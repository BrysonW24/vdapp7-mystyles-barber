import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const SETTINGS_ITEMS = [
  { id: '1', icon: 'person-outline', label: 'Edit Profile' },
  { id: '2', icon: 'notifications-outline', label: 'Notifications', hasToggle: true },
  { id: '3', icon: 'location-outline', label: 'Location Services', hasToggle: true },
  { id: '4', icon: 'card-outline', label: 'Payment Methods' },
  { id: '5', icon: 'star-outline', label: 'Favorite Barbers' },
  { id: '6', icon: 'help-circle-outline', label: 'Help & Support' },
  { id: '7', icon: 'document-text-outline', label: 'Terms of Service' },
  { id: '8', icon: 'shield-outline', label: 'Privacy Policy' },
  { id: '9', icon: 'log-out-outline', label: 'Sign Out', danger: true },
];

export default function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [location, setLocation] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {SETTINGS_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.settingItem}>
            <View style={[styles.iconContainer, item.danger && styles.dangerIcon]}>
              <Ionicons
                name={item.icon as any}
                size={22}
                color={item.danger ? colors.accent.error : colors.primary.main}
              />
            </View>
            <Text style={[styles.label, item.danger && styles.dangerText]}>
              {item.label}
            </Text>
            {item.hasToggle ? (
              <Switch
                value={item.label === 'Notifications' ? notifications : location}
                onValueChange={(value) => {
                  if (item.label === 'Notifications') setNotifications(value);
                  else setLocation(value);
                }}
                trackColor={{ false: colors.border.light, true: colors.primary.light }}
                thumbColor={colors.text.primary}
              />
            ) : (
              <Ionicons name="chevron-forward" size={20} color={colors.text.tertiary} />
            )}
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.version}>MyStyles v1.0.0</Text>
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.dark,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  dangerIcon: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  label: {
    flex: 1,
    ...typography.body,
    color: colors.text.primary,
  },
  dangerText: {
    color: colors.accent.error,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  version: {
    ...typography.caption,
    color: colors.text.tertiary,
  },
});
