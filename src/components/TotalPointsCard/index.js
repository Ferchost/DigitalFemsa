import * as React from 'react';
import { View, Text } from 'react-native';
import getMonth from '../../function/getMonth';
import styles from './style';
function TotalPointsCard({points }) {
  return (
    <View style={styles.container} >
      <Text style={styles.text_month} >{getMonth()}</Text>

      <Text style={styles.text_points} >{points === "false" ? 0 : points}.00 pts</Text>
    </View>
  );
}
export default TotalPointsCard