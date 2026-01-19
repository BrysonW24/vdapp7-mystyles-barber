import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, typography } from '../theme';

interface SplashScreenProps {
  onFinish?: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>✂️</Text>
      <Text style={styles.title}>MyStyles</Text>
      <Text style={styles.tagline}>Your Personal Barber</Text>
      <ActivityIndicator size="small" color={colors.primary.main} style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    ...typography.h1,
    color: colors.primary.main,
  },
  tagline: {
    ...typography.body,
    color: colors.text.tertiary,
    marginTop: 8,
  },
  loader: {
    marginTop: 40,
  },
});
