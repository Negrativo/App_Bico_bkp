import React, { useState } from 'react';
import { View, SwitchView, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import api from '../services/api';

import Logo from '../../assets/Icon_empresa.png';

export default function Login({ navigation }){
    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');

    async function handleSubmit() {
        console.log(email, senha);
        const response = await api.post('/user/cadastro', {
            email,
            senha
        })

        const { _id } = response.data;

        console.log('localizado');

        navigation.navigate('Cadastro');
    };

    async function TelaCadastro() {
        console.log('tela cadastro');

    };

    return (
    <SwitchView style={styles.container}>
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
                value={email}
                onChangeText={text => setEmail(text)}
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
                value={senha}
                onChangeText={text => setSenha(text)}
            />            
        </View>

        <Text style={styles.labelBold}>Esqueceu sua senha?</Text>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
            <Text style={styles.labelBold}> clicando aqui</Text>
        </Text>
    </SwitchView>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 75
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
