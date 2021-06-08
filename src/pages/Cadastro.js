import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Logo from '../../assets/Icon_empresa.png';

export default function Abertura(){
    return (
    <View style={styles.container}>
        <Image 
            source={Logo}
            style={styles.logo}
        />
        
        <Text style={styles.label}>LOGIN</Text>
        <View style={styles.form} >
            <TextInput 
                style={styles.input}
                textAlign="center"
                textContentType='emailAddress'
                placeholder="E-mail"
                placeholderTextColor="#D9DBDC"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                autoCorrect={false}
            />            
        </View>

        <Text style={styles.label}>SENHA</Text>
        <View style={styles.form} >
            <TextInput 
                style={styles.input}
                textAlign="center"
                textContentType='password'
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#D9DBDC"
                autoCompleteType="password"
                autoCapitalize="none"
                autoCorrect={false}
            />            
        </View>

        <Text style={styles.label}>CONFIRMAR SENHA SENHA</Text>
        <View style={styles.form} >
            <TextInput 
                style={styles.input}
                textAlign="center"
                textContentType='password'
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#D9DBDC"
                autoCompleteType="password"
                autoCapitalize="none"
                autoCorrect={false}
            />            
        </View>

        <Text style={styles.labelBold}>Esqueceu sua senha?</Text>

        <TouchableOpacity style={styles.button}>
            <Text>CADASTRAR</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 150
    },

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        width: 250,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 25   
    },

    button:{
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 5,
        textDecorationLine: 'underline'
    }
});
