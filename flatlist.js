//https://github.com/umtcngl

import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Birinci Öğe',
  },
  {
    id: '2',
    title: 'İkinci Öğe',
  },
  {
    id: '3',
    title: 'Üçüncü Öğe',
  },
  {
    id: '4',
    title: 'Birinci Öğe',
  },
  {
    id: '5',
    title: 'İkinci Öğe',
  },
  {
    id: '6',
    title: 'Üçüncü Öğe',
  },
  {
    id: '7',
    title: 'Birinci Öğe',
  },
  {
    id: '8',
    title: 'İkinci Öğe',
  },
  {
    id: '9',
    title: 'Üçüncü Öğe',
  },
];

// Her öğe için bir bileşen
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

// Ana uygulama bileşeni
const App = () => {
  const [selectedId, setSelectedId] = useState();
  const [refreshing, setRefreshing] = useState(false); // Yenileme durumu

  // Yenileme işlemi fonksiyonu
  const onRefresh = () => {
    // Gerçek yenileme mantığınızı buraya ekleyebilirsiniz
    setRefreshing(true);

    // Bu sadece bir simülasyon, gerçek yenileme mantığınızı buraya ekleyin
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Her öğeyi render etmek için fonksiyon
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* FlatList bileşeni */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text>Header</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
        )}
        // Yenileme kontrolünü ekleyin
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

    </SafeAreaView>
  );
};

// Stil tanımları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    padding: 20,
    backgroundColor: 'bisque',
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: 'cyan',
    alignItems: 'center',
  },
});

export default App;
