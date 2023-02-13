import * as React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './style';

function TwoBottomButtons({ button1, button2, func1, func2 }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shortButton} onPress={func1} >
        <Text style={styles.title}>{button1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shortButton} onPress={func2} >
        <Text style={styles.title}>{button2}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TwoBottomButtons