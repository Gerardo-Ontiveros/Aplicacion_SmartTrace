import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '@constants/Colors';

export const CardPressureList = ({ pressure, altitude }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 30,
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Presión
          </Text>
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 24,
              fontWeight: 'semibold',
            }}
          >
            {pressure} hPa
          </Text>
        </View>

        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 20, fontWeight: 'bold' }}>
            Altitud
          </Text>

          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 24,
              fontWeight: 'semibold',
            }}
          >
            {altitude} m.s.n.m
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightTheme.whiteColor,
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
