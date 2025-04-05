import React from "react";
import { ScrollView, Text } from "react-native";
import COLORS from "@constants/Colors";

export const Temperature = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightTheme.primaryColor,
        paddingTop: 50,
      }}
    >
      <Text>Temperature</Text>
    </ScrollView>
  );
};
