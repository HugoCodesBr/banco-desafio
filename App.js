import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      sexos: [
        {sexo: 'Masculino', key: 1},
        {sexo: 'Feminino', key: 2},
      ],
      limite: 0,
      estudante: false,
      nome: '',
      idade: 0,
      sexo: '',
    }
  }

  render(){
    let sexoOpcao = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexo}/>
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Banco Desafio</Text>
        <Text style={styles.textoCadastro}>Vamos fazer seu cadastro:</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={ (nome) => this.setState({nome: nome})}/>
          <TextInput style={styles.input} placeholder="Idade" onChangeText={ (idade) => this.setState({idade: idade})}/>
          
          <Picker style={styles.input} onValueChange={ (sexo) => this.setState({sexo: sexo})}>
            {sexoOpcao}
          </Picker>

          <Text style={styles.label}>Seu limite:</Text>
          <Slider
            minimumValue={0}
            maximumValue={3000}
            value={this.state.limite}
            onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
            minimumTrackTintColor="#A7DBD8"
            maximumTrackTintColor="#F38630"
          />
          <Text style={styles.limite}>{this.state.limite.toFixed(0)} R$</Text>

          <Text style={styles.label}>Estudante?</Text>
          <View style={styles.estudante}>
            <Switch
              value={this.state.estudante}
              onValueChange={ (estudante) => this.setState({estudante: estudante})}
              thumbColor="#A7DBD8"
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={ () => alert(
            `Nome: ${this.state.nome}, Idade: ${this.state.idade}, Sexo: ${this.state.sexo}, Limite: ${this.state.limite.toFixed(0)}, Estudante? ${this.state.estudante}`
          )}>
            <Text style={styles.btnTexto}>Abrir conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#F38630'
  },
  textoCadastro: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#69D2E7'
  },
  inputArea: {
    marginTop: 40,
  },
  input: {
    height: 40,
    width: 300,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 8,
  },
  label: {
    width: 300,
    padding: 8,
    margin: 4,
    color: '#F38630',
    fontWeight: 'bold'
  },
  limite: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#69D2E7'
  },
  estudante: {
    justifyContent: 'flex-start',
    width: 50,
    marginTop: -10
  },
  botao: {
    backgroundColor: '#F38630',
    padding: 10,
    borderRadius: 4,
    marginTop: 20
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
