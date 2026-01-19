import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Button, Chip, Divider } from 'react-native-paper';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();

  // Extract params with defaults
  const {
    id = 'unknown',
    title = 'Service Details',
    description = 'No description available.',
    imageUrl,
    tags = [],
    metadata = {},
  } = route.params || {};

  const variant = metadata.type === 'barber' ? 'barber' : 'service';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imagePlaceholder}>
          <Text variant="headlineLarge" style={styles.placeholderText}>
            {variant === 'barber' ? '💈' : '✂️'}
          </Text>
        </View>

        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.title}>
            {title}
          </Text>
          <View style={styles.ratingRow}>
            {variant === 'barber' ? (
              <Text variant="titleSmall" style={styles.rating}>⭐ {metadata.rating || '5.0'}</Text>
            ) : (
              <Text variant="titleMedium" style={styles.price}>{metadata.price || '$0'}</Text>
            )}
          </View>
        </View>

        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <Chip key={index} style={styles.tag} mode="flat">
                {tag}
              </Chip>
            ))}
          </View>
        )}

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            {variant === 'barber' ? 'About Our Expert' : 'Service Description'}
          </Text>
          <Text variant="bodyMedium" style={styles.description}>
            {description}
          </Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.actionButton}
            icon={variant === 'barber' ? 'account-check' : 'calendar-plus'}
          >
            {variant === 'barber' ? 'Book with This Barber' : 'Add to Booking'}
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.goBack()}
            style={styles.actionButton}
          >
            Back to Search
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 64,
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
  },
  ratingRow: {
    marginLeft: 16,
  },
  rating: {
    color: '#FFD700',
  },
  price: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    borderRadius: 8,
  },
  divider: {
    marginVertical: 8,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  description: {
    lineHeight: 24,
    opacity: 0.8,
  },
  actions: {
    padding: 24,
    gap: 12,
  },
  actionButton: {
    borderRadius: 8,
    paddingVertical: 4,
  },
});
