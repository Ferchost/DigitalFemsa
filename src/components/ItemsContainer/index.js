import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './style';
import useGetData from '../../function/getData';
import Item from '../Item';

function ItemsContainer({ type = "all" ,navigation}) {



  return (
    <View style={styles.container} >
      {
        type == "all"?
        <FlatList
        data={useGetData().data.all}
        renderItem={({ item }) =>
          <Item title={item.product}
            image={item.image}
            points={item.points}
            date={item.createdAt}
            type={item.is_redemption}
            navigation={navigation}
          />}
        keyExtractor={item => item.id}
      />
      : type == "lose"?
      <FlatList
      data={useGetData().data.lose}
      renderItem={({ item }) =>
        <Item title={item.product}
          image={item.image}
          points={item.points}
          date={item.createdAt}
          type={item.is_redemption}
          navigation={navigation}

        />}
      keyExtractor={item => item.id}
    />
    :
    <FlatList
    data={useGetData().data.won}
    renderItem={({ item }) =>
      <Item title={item.product}
        image={item.image}
        points={item.points}
        date={item.createdAt}
        type={item.is_redemption}
        navigation={navigation}

      />}
    keyExtractor={item => item.id}
  />
      }
    </View>
  );
}
export default ItemsContainer