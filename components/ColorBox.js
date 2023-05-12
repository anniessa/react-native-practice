import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };

  const textStyle = {
    color:
      // algorithm that takes the hex code and compares it to white
      // eslint-disable-next-line prettier/prettier
    //  if the RGB value are in the end 10% of the white spectrum,
      // you can adjust for that color scheme
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textStyle]}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
