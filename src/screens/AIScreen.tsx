import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const STYLE_SUGGESTIONS = [
  { id: '1', name: 'Classic Fade', image: 'https://picsum.photos/150/150?random=1' },
  { id: '2', name: 'Textured Crop', image: 'https://picsum.photos/150/150?random=2' },
  { id: '3', name: 'Pompadour', image: 'https://picsum.photos/150/150?random=3' },
  { id: '4', name: 'Undercut', image: 'https://picsum.photos/150/150?random=4' },
];

export default function AIScreen() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Ionicons name="sparkles" size={32} color={colors.primary.main} />
          <Text style={styles.title}>AI Style Advisor</Text>
          <Text style={styles.subtitle}>
            Get personalized hairstyle recommendations based on your face shape
          </Text>
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="camera-outline" size={32} color={colors.primary.main} />
          <Text style={styles.uploadText}>Take a Photo</Text>
          <Text style={styles.uploadSubtext}>or upload from gallery</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Styles</Text>
          <Text style={styles.sectionSubtitle}>Based on your preferences</Text>

          <View style={styles.stylesGrid}>
            {STYLE_SUGGESTIONS.map((style) => (
              <TouchableOpacity
                key={style.id}
                style={[
                  styles.styleCard,
                  selectedStyle === style.id && styles.styleCardSelected,
                ]}
                onPress={() => setSelectedStyle(style.id)}
              >
                <Image source={{ uri: style.image }} style={styles.styleImage} />
                <Text style={styles.styleName}>{style.name}</Text>
                {selectedStyle === style.id && (
                  <View style={styles.selectedBadge}>
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {selectedStyle && (
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book This Style</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    marginTop: spacing.md,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  uploadButton: {
    backgroundColor: colors.background.secondary,
    borderRadius: 16,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border.light,
    borderStyle: 'dashed',
    marginBottom: spacing.xl,
  },
  uploadText: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
  uploadSubtext: {
    ...typography.caption,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text.primary,
  },
  sectionSubtitle: {
    ...typography.caption,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  stylesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  styleCard: {
    width: '48%',
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  styleCardSelected: {
    borderColor: colors.primary.main,
  },
  styleImage: {
    width: '100%',
    height: 120,
    backgroundColor: colors.background.tertiary,
  },
  styleName: {
    ...typography.body,
    color: colors.text.primary,
    padding: spacing.sm,
    textAlign: 'center',
  },
  selectedBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.primary.main,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
