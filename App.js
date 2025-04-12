import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigator } from '@routes/screens.routes';
import TabNavigator from '@routes/screens.routes';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('@alreadyLaunched');
        if (value === null) {
          // Es la primera vez
          await AsyncStorage.setItem('@alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          // No es la primera vez
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
        setIsFirstLaunch(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isFirstLaunch ? '' : <StackNavigator />;
};

export default App;
