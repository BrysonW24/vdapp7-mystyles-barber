import React from 'react';
import { View, Text } from 'react-native';

const MapView = ({ children, style }: any) => (
  <View style={[style, { backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' }]}>
    <Text style={{ color: '#FFD700', fontSize: 20, fontWeight: 'bold' }}>[ Interactive Map View ]</Text>
    <Text style={{ color: '#666', marginTop: 8 }}>Native Maps disabled for preview</Text>
    {children}
  </View>
);

export const Marker = ({ children }: any) => <View>{children}</View>;
export const PROVIDER_DEFAULT = 'default';

export default MapView;
