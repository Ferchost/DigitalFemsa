import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
function SectionLabel({text, UpperCase=true}) {
  return (
      <Text style={styles.text} >{UpperCase?text.toUpperCase():text}</Text>
  );
}
export default SectionLabel