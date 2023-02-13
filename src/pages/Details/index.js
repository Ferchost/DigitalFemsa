import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import BottomButtons from '../../components/BottomButtons';
import SectionLabel from '../../components/SectionLabel';
import formatDate from '../../function/formatDate';
import styles from './style';
function Details({ route, navigation }) {
  const { title, points, type, image, date } = route.params
  const [imageN, setImageN] = useState(image)
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.image_container} >
        <Image source={{ uri: imageN }} style={styles.product_image} />
      </View>
      <SectionLabel text={"Detalles del producto:"} UpperCase={false} />
      <Text style={styles.buy_date}>Comprado el {formatDate(date)}</Text>
      <SectionLabel text={"Con esta compra acumulaste:"} UpperCase={false} />
      <Text style={styles.points}>{points} puntos</Text>

      <BottomButtons largeButtonTitle={"Aceptar"} func={() => navigation.goBack()} />

    </View>
  );
}
export default Details