
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Mock PROVIDER_DEFAULT constant
export const PROVIDER_DEFAULT = 'default';

// Mock Marker component
export const Marker = ({ children, coordinate, title }: any) => {
  if (!coordinate) return null;
  // Calculate relative position based on valid ranges or just center them for the mock
  const left = ((coordinate.longitude + 180) / 360) * 100 + '%';
  const top = ((90 - coordinate.latitude) / 180) * 100 + '%';
  
  return (
    <View style={[styles.marker, { left: '50%', top: '50%', marginLeft: (coordinate.longitude - 151.2)*1000, marginTop: (coordinate.latitude + 33.8)*1000 }]}> 
       {/* Simple offset logic for visual separation in mock */}
      {children ? children : (
        <View style={styles.defaultMarker}>
          <Text style={styles.markerText}>{title || 'M'}</Text>
        </View>
      )}
    </View>
  );
};

// Mock MapView component
const MapView = (props: any) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>Map View (Mock)</Text>
      <View style={styles.mapArea}>
        {/* Render children (like Markers) */}
        {props.children}
      </View>
      <Text style={styles.subtext}>
        Native maps are not supported in Expo Go. 
        This is a placeholder for development.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  mapArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    color: '#888',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#666',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  marker: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultMarker: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  }
});

export default MapView;
