import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
      height:155,
      backgroundColor:'#D0D6FF',
      width:'100%'
    },
    product_image: {
        height:350,
        width:350,
        borderRadius:20,
        position:'relative'
      },
    image_container: {
        height:350,
        backgroundColor:'#fff',
        width:'88%',
        margin:25,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: '6%',
        position:'absolute',
        bottom:25
    },
    buy_date: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: '6%'
    },
    points: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: '6%'
    }

});

export default styles