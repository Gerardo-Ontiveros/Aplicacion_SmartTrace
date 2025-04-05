import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@constants/Colors";
import { Icon } from "@ui/Icons";

const Card = ({ temperature, time }) => {
  return (
    <View style={[styles.container]}>
      <Text style={{ color: COLORS.lightTheme.whiteColor }}>{time}</Text>
      <Icon name="clouds" size={24} color={COLORS.lightTheme.whiteColor} />
      <Text style={{ color: COLORS.lightTheme.whiteColor }}>
        {temperature}°
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,

    backgroundColor: COLORS.lightTheme.secondaryColor,
    borderRadius: 8,
    width: 57,
    height: 86,
  },
});

export default Card;
