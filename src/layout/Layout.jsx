import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import COLORS from '@constants/Colors';

export const Layout = ({ children, view }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.lightTheme.primaryColor,
        paddingTop: 50,
      }}
    >
      {view ? <View style={styles.container}>{children}</View> : children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
});
