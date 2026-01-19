import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Main: NavigatorScreenParams<BottomTabParamList>;
  Auth: undefined;
  Details: {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
    tags?: string[];
    metadata?: Record<string, any>;
  };
  Settings: undefined;
  Notifications: undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  Explore: undefined;
  History: undefined;
  AI: undefined;
  Account: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
