import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import BebidaService from './BebidaService';
import { TextInputMask } from 'react-native-masked-text';

export default function BebidaForm({ navigation, route }) {
  const bebidaAntiga = route.params || {};
  const [nome, setNome] = useState(bebidaAntiga.nome || '');
  const [preco, setPreco] = useState(bebidaAntiga.preco || '');
  const [estoque, setEstoque] = useState(bebidaAntiga.estoque || '');
  const [descricao, setDescricao] = useState(bebidaAntiga.descricao || '');
  const [categoria, setCategoria] = useState(bebidaAntiga.categoria || '');

  async function salvar() {
    if (!nome || !preco || !estoque || !descricao || !categoria) {
      alert('Preencha todos os campos!');
      return;
    }

    const bebida = { nome, preco, estoque, descricao, categoria };

    if (bebidaAntiga.id) {
      bebida.id = bebidaAntiga.id;
      await BebidaService.atualizar(bebida);
      alert('Bebida atualizada!');
    } else {
      await BebidaService.salvar(bebida);
      alert('Bebida cadastrada!');
    }

    navigation.navigate('Bebidas');
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Cadastro de Bebida</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} mode="outlined" style={styles.input} />
      <TextInputMask
        type={'money'}
        value={preco}
        onChangeText={setPreco}
        customTextInput={TextInput}
        customTextInputProps={{ label: 'Preço (R$)', mode: 'outlined', style: styles.input }}
      />
      <TextInput label="Estoque" value={estoque} onChangeText={setEstoque} keyboardType="numeric" mode="outlined" style={styles.input} />
      <TextInput label="Descrição" value={descricao} onChangeText={setDescricao} mode="outlined" style={styles.input} />
      <TextInput label="Categoria" value={categoria} onChangeText={setCategoria} mode="outlined" style={styles.input} />

      <Button icon="content-save" mode="contained" onPress={salvar}>
        Salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 20 }, input: { marginBottom: 10 } });
