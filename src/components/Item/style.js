import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: '94%',
        fontWeight: 'bold',
        margin: 10,
    },
    titleView: {
        height:'75%',
        width:'55%',
        justifyContent:'space-between',
        paddingHorizontal:5
    },
    img: {
        width: 60,
        height: 60,
        borderRadius:10
    },
    title:{
        fontSize:13,
        fontWeight:'bold'
    },
    date:{
        fontSize:11,
        fontWeight:'300'
    },
    points:{
        fontSize:15,
        fontWeight:'bold'
    },
    positive:{
        fontSize:15,
        fontWeight:'bold',
        color:'green'
    },
    negative:{
        fontSize:15,
        fontWeight:'bold',
        color:'red'
    },
    goTo:{
        fontSize:18,
        fontWeight:'bold',
        right:0,
        position:'absolute'
    },


});

export default styles