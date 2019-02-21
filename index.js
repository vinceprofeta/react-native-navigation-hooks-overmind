import { Navigation } from 'react-native-navigation';
import { pushTutorialScreen, pushTabBasedApp } from 'AppNavigator';

Navigation.events().registerAppLaunchedListener(() => pushTabBasedApp());
