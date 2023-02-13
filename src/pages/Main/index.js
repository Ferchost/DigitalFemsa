import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import BottomButtons from '../../components/BottomButtons';
import TwoBottomButtons from '../../components/BottomButtons/TwoButtons';
import ItemsContainer from '../../components/ItemsContainer';
import SectionLabel from '../../components/SectionLabel';
import TotalPointsCard from '../../components/TotalPointsCard';
import GetPoints from '../../function/getPoints';
import styles from './style';
function Main({navigation}) {
  const [oneButton, setOneButton] = useState(false)
  const [filter, setFilter] = useState("")

  const win = () => {
    setFilter("won")
    setOneButton(!oneButton)
  }
  const lose = () => {
    setFilter("lose")
    setOneButton(!oneButton)

  }
  const back = () => {
    setFilter("all")
    setOneButton(!oneButton)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Bienvenido de vuelta!</Text>
      <Text style={styles.name} >Fernando Serrano</Text>
      <SectionLabel text={"Tus puntos"} />
      <TotalPointsCard month={"Enero"} points={GetPoints()} />
      <SectionLabel text={"Tus movimientos"} />
      <ItemsContainer type={filter} navigation={navigation} />
      {
        oneButton ? <BottomButtons largeButtonTitle={"Todos"} func={back} /> :
          <TwoBottomButtons button1={"Ganado"} func1={win}
            button2={"Canjeado"} func2={lose} />
      }


    </View>
  );
}
export default Main