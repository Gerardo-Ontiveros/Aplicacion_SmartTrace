import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@constants/Colors";
import { Layout } from "../layout/Layout";

export const Settings = () => {
  return (
    <Layout view>
      <Text>Settings</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
});
