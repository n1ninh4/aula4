import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import ClienteService from './ClienteService';
import { TextInputMask } from 'react-native-masked-text';

export default function ClienteForm({ navigation, route }) {
  const clienteAntigo = route.params || {};
  const [nome, setNome] = useState(clienteAntigo.nome || '');
  const [cpf, setCpf] = useState(clienteAntigo.cpf || '');
  const [telefone, setTelefone] = useState(clienteAntigo.telefone || '');
  const [email, setEmail] = useState(clienteAntigo.email || '');
  const [endereco, setEndereco] = useState(clienteAntigo.endereco || '');

  async function salvar() {
    if (!nome || !cpf || !telefone || !email || !endereco) {
      alert('Preencha todos os campos!');
      return;
    }

    const cliente = { nome, cpf, telefone, email, endereco };

    if (clienteAntigo.id) {
      cliente.id = clienteAntigo.id;
      await ClienteService.atualizar(cliente);
      alert('Cliente atualizado!');
    } else {
      await ClienteService.salvar(cliente);
      alert('Cliente cadastrado!');
    }

    navigation.navigate('Clientes');
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Cadastro de Cliente</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} mode="outlined" style={styles.input} />
      <TextInputMask
        type={'cpf'}
        value={cpf}
        onChangeText={setCpf}
        customTextInput={TextInput}
        customTextInputProps={{ label: 'CPF', mode: 'outlined', style: styles.input }}
      />
      <TextInputMask
        type={'cel-phone'}
        options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
        value={telefone}
        onChangeText={setTelefone}
        customTextInput={TextInput}
        customTextInputProps={{ label: 'Telefone', mode: 'outlined', style: styles.input }}
      />
      <TextInput label="Email" value={email} onChangeText={setEmail} mode="outlined" style={styles.input} keyboardType="email-address" />
      <TextInput label="Endereço" value={endereco} onChangeText={setEndereco} mode="outlined" style={styles.input} />

      <Button icon="content-save" mode="contained" onPress={salvar}>
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 20 }, input: { marginBottom: 10 } });
