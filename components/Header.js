import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headContainer}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          marginHorizontal: 20,
        }}>
        Notepad
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: '#fff',
    height: 120,
    justifyContent: 'flex-end',
  },
});

export default Header;
