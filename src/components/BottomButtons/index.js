import * as React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './style';

function BottomButtons({ largeButtonTitle, func }) {

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.largeButton} onPress={func} >
        <Text style={styles.title}>{largeButtonTitle}</Text>
      </TouchableOpacity>

    </View>
  );
}
export default BottomButtons