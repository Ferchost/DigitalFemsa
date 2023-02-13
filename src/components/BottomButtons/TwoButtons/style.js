import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: 120,
        width: '88%',
        fontWeight: 'bold',
        position:'absolute',
        bottom:0
    },
    shortButton: {
        alignItems: 'center',
        justifyContent:'center',
        height: 50,
        width: '48%',
        fontWeight: 'bold',

        backgroundColor:'#334FFA',
        borderRadius:10
    },
    title:{
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    }


});

export default styles