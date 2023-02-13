import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: '75%',
        borderRadius: 20,
        fontWeight: 'bold',
        margin: 15,
        backgroundColor: '#334FFA',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text_month: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 18,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: '6%',
        color: '#fff'
    },
    text_points: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }

});

export default styles