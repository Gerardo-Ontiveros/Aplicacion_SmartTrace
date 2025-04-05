import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@constants/Colors";
import { Icon } from "@ui/Icons";

const DetailsClimate = ({ humidity }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Icon name="rain" size={24} color={COLORS.lightTheme.whiteColor} />
        <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 16 }}>
          1%
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Icon name="humidity" size={24} color={COLORS.lightTheme.whiteColor} />
        <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 16 }}>
          {humidity}%
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Icon name="wind" size={24} color={COLORS.lightTheme.whiteColor} />
        <Text style={{ color: COLORS.lightTheme.whiteColor, fontSize: 16 }}>
          10 km/h
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingLeft: 14,
    paddingRight: 27,
    backgroundColor: COLORS.lightTheme.thirdColor,
    borderRadius: 16,
    width: 328,
    height: 66,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DetailsClimate;
