import React, { useState } from 'react';
import { ScrollView, Text, View, RefreshControl, StyleSheet } from 'react-native';

const IpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam vel libero convallis sagittis in ac erat. Integer eu lectus et velit mollis condimentum. Fusce feugiat aliquam urna, vitae posuere est accumsan at. Suspendisse luctus tincidunt purus, non rhoncus tellus tincidunt in. Duis vel malesuada tellus. Sed facilisis sapien in justo ullamcorper, vel fermentum velit varius. Maecenas at magna ut est tristique egestas. Sed blandit ac velit ut auctor. Integer vitae urna ut ex vulputate mattis nec sit amet neque. Vivamus in tincidunt quam. Vivamus vel orci in elit venenatis fermentum vitae eget tellus. Fusce fringilla ex in velit sollicitudin, in suscipit elit consequat.

Duis at orci eget ex luctus dapibus. Ut aliquam hendrerit nisl, ac vulputate purus varius ac. Suspendisse potenti. Vivamus accumsan, nunc vel feugiat luctus, dui velit fermentum elit, id euismod felis dolor vel sapien. Integer id aliquet urna. Sed consequat, libero sit amet egestas dapibus, felis nulla pellentesque elit, eu feugiat tortor odio sit amet arcu. Nam efficitur ipsum ac est efficitur, quis consectetur leo rhoncus. Vivamus scelerisque ante a lectus fringilla, eu gravida mi hendrerit. Nullam vitae nunc id libero gravida ultricies nec eu tellus. In hac habitasse platea dictumst. Ut in volutpat elit. Nullam laoreet congue purus, in ullamcorper justo fermentum non. Sed eu lacinia est. Suspendisse nec quam nec nulla gravida vulputate. Suspendisse vel purus nec quam cursus sodales. Maecenas nec vulputate odio.
`;

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Yenileme işlemi burada gerçekleştirilebilir

    // Simülasyon amaçlı, 2 saniye bekleyip sonra refreshing durumunu kapatıyoruz
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.text}>{IpsumText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default App;
