import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Sun from '../assets/sun.avif';
import Track from '../assets/track.avif';
import COLORS from '@constants/Colors';
import Card from '@components/Card';
import DetailsClimate from '@components/DetailsClimate';
import { Layout } from '../layout/Layout';

export const Home = () => {
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(60);
  const [currentTime, setCurrentTime] = useState('');

  // Datos simulados para las últimas mediciones
  const lastUpdate = [
    { id: 1, temperature: 24, time: '9:00' },
    { id: 2, temperature: 24, time: '9:05' },
    { id: 3, temperature: 25, time: '9:10' },
    { id: 4, temperature: 25, time: '9:15' },
    { id: 5, temperature: 26, time: '9:20' },
  ];

  // Simular cambios en los datos cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizar hora actual
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);

      // Simular pequeñas variaciones en temperatura y humedad
      setTemperature((prev) => {
        const variation = Math.random() * 2 - 1; // -1 a 1
        return Math.max(20, Math.min(30, Math.floor(prev + variation)));
      });

      setHumidity((prev) => {
        const variation = Math.random() * 5 - 2.5; // -2.5 a 2.5
        return Math.max(50, Math.min(70, Math.floor(prev + variation)));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTextTemperature = (temp) => {
    if (temp < 10) return 'Ligeramente frío';
    if (temp < 20) return 'Clima agradable';
    return 'Caluroso';
  };

  const getDayName = () => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[new Date().getDay()];
  };

  return (
    <Layout>
      <Text style={styles.appTitle}>SmartTrace</Text>

      <View style={styles.container}>
        <View style={styles.locationTimeContainer}>
          <Text style={styles.textWhite}>Durango, Durango</Text>
          <Text style={styles.textWhite}>
            {getDayName()} - {currentTime || '09:10'}
          </Text>
        </View>

        <View style={styles.weatherContainer}>
          <Image source={Sun} width={150} height={150} contentFit="contain" />
          <Text style={styles.temperatureText}>{temperature}°C</Text>
          <Text style={styles.textWhite}>{getTextTemperature(temperature)}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <DetailsClimate humidity={humidity} />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Últimas mediciones</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.cardsContainer}>
        {lastUpdate.map((item) => (
          <Card key={item.id} temperature={item.temperature} time={item.time} />
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Pista recorrida</Text>
        <View style={styles.divider} />
        <View style={styles.imageContainer}>
          <Image source={Track} width={150} height={150} contentFit="contain" />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Altitud</Text>
      </View>

      <StatusBar style="auto" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  weatherContainer: {
    alignItems: 'center',
    paddingTop: 29,
  },
  appTitle: {
    paddingLeft: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightTheme.whiteColor,
  },
  locationTimeContainer: {
    alignItems: 'center',
    gap: 8,
  },
  textWhite: {
    color: COLORS.lightTheme.whiteColor,
    fontSize: 16,
  },
  temperatureText: {
    color: COLORS.lightTheme.whiteColor,
    fontSize: 48,
    fontWeight: 'bold',
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 24,
    gap: 21,
  },
  sectionTitle: {
    textAlign: 'right',
    color: COLORS.lightTheme.whiteColor,
    fontSize: 16,
  },
  divider: {
    borderBottomColor: COLORS.lightTheme.whiteColor,
    borderBottomWidth: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
});
