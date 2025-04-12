import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Sun from '../assets/sun.avif';
import Track from '../assets/track.avif';
import { db, ref, onValue } from '@lib/firebase';
import COLORS from '@constants/Colors';
import Card from '@components/Card';
import DetailsClimate from '@components/DetailsClimate';
import { Layout } from '../layout/Layout';

export const Home = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const lastUpdate = [
    {
      id: 1,
      temperature: 25,
      time: '9:20',
    },
    {
      id: 2,
      temperature: 25,
      time: '9:20',
    },
    {
      id: 3,
      temperature: 25,
      time: '9:20',
    },
    {
      id: 4,
      temperature: 25,
      time: '9:20',
    },
    {
      id: 5,
      temperature: 25,
      time: '9:20',
    },
  ];

  useEffect(() => {
    const dataRef = ref(db, 'iot-data/device_ESP32');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(Math.floor(data.temperature));
      setHumidity(Math.floor(data.humidity));
    });
  }, [db]);

  const getTextTemperature = (temperature) => {
    if (temperature < 10) {
      return 'Ligeramente frío';
    } else if (temperature < 20) {
      return 'Clima agradable';
    } else {
      return 'Caluroso';
    }
  };

  return (
    <Layout>
      <Text
        style={{
          paddingLeft: 24,
          fontSize: 18,
          fontWeight: 'bold',
          color: COLORS.lightTheme.whiteColor,
        }}
      >
        SmartTrace
      </Text>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', gap: 8 }}>
          <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 18 }}>
            Durango, Durango
          </Text>
          <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 16 }}>Viernes - 09:10</Text>
        </View>
        <View style={styles.weatherContainer}>
          <Image source={Sun} width={150} height={150} contentFit="contain" />
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 48,
              fontWeight: 'heavy',
            }}
          >
            {temperature}°C
          </Text>
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 16,
            }}
          >
            {getTextTemperature(temperature)}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <DetailsClimate humidity={humidity} />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          paddingTop: 24,
          gap: 21,
        }}
      >
        <Text
          style={{
            textAlign: 'right',
            color: COLORS.lightTheme.whiteColor,
            fontSize: 16,
          }}
        >
          Últimas mediciones
        </Text>
        <View
          style={{
            borderBottomColor: COLORS.lightTheme.whiteColor,
            borderBottomWidth: 1,
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 16,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {lastUpdate.map((item) => (
          <Card key={item.id} temperature={item.temperature} time={item.time} />
        ))}
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          paddingTop: 40,
          gap: 21,
        }}
      >
        <Text
          style={{
            textAlign: 'right',
            color: COLORS.lightTheme.whiteColor,
            fontSize: 16,
          }}
        >
          Pista recorrida
        </Text>
        <View
          style={{
            borderBottomColor: COLORS.lightTheme.whiteColor,
            borderBottomWidth: 1,
          }}
        ></View>
        <View style={{ alignItems: 'center' }}>
          <Image source={Track} width={150} height={150} contentFit="contain" />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,

          gap: 21,
        }}
      >
        <Text
          style={{
            textAlign: 'right',
            color: COLORS.lightTheme.whiteColor,
            fontSize: 16,
          }}
        >
          Altitud
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,

          gap: 21,
        }}
      ></View>
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
});
