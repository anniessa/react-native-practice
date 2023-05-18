/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
    const [colorPalettes, setColorPalettes] = useState([]);

    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');

        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);
        }
    }, []);

    useEffect(()=> {
        fetchColorPalettes();
    }, [fetchColorPalettes]);

  return (
    <FlatList
    style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white',
    },
});

export default Home;
