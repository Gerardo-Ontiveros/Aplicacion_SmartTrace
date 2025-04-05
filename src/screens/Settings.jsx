import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@constants/Colors";

export const Settings = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightTheme.primaryColor,
        paddingTop: 50,
      }}
    >
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
});
