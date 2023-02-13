import * as React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import formatDate from '../../function/formatDate';
import styles from './style';

function Item({ title, points, type, image, date,navigation }) {
const goDetails=()=>{
navigation.navigate("Details",{ title, points, type, image, date})
}
  return (
    <TouchableOpacity onPress={goDetails} style={styles.container}>
      <Image source={{ uri: image }}
        style={styles.img} />
      <View style={styles.titleView} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>

      </View>
      <View>
        <Text style={styles.points}>
        <Text style={type?styles.negative:styles.positive}>{type?"-":"+"}</Text>

          {points}</Text>
      </View>
      <Text style={styles.goTo}>{'>'}</Text>

    </TouchableOpacity>
  );
}
export default Item