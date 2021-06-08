import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import Logo from '../../assets/Icon_empresa.png';

export default function Abertura(){
    return (
    <View style={styles.container}>
        <Image source={Logo}></Image>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27BAE9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


});
