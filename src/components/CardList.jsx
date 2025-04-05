import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@ui/Icons";
import COLORS from "@constants/Colors";
import { Image } from "expo-image";

export const CardList = ({ temperature, humidity, rain, image }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
        <Image source={image} width={60} height={60} contentFit="contain" />
        <Text
          style={{
            color: COLORS.lightTheme.whiteColor,
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          {temperature}°
        </Text>
      </View>
      <View style={{ gap: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Icon name="rain" size={30} color={COLORS.lightTheme.whiteColor} />
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {rain}%
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Icon
            name="humidity"
            size={30}
            color={COLORS.lightTheme.whiteColor}
          />
          <Text
            style={{
              color: COLORS.lightTheme.whiteColor,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {humidity}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightTheme.whiteColor,
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
