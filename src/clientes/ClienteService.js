import AsyncStorage from '@react-native-async-storage/async-storage';
const chave = '@clientes';

async function listar() {
  const json = await AsyncStorage.getItem(chave);
  return json ? JSON.parse(json) : [];
}

async function salvar(cliente) {
  cliente.id = new Date().getTime();
  const clientes = await listar();
  clientes.push(cliente);
  await AsyncStorage.setItem(chave, JSON.stringify(clientes));
}

async function atualizar(clienteAtualizado) {
  const clientes = await listar();
  const atualizados = clientes.map((c) => (c.id === clienteAtualizado.id ? clienteAtualizado : c));
  await AsyncStorage.setItem(chave, JSON.stringify(atualizados));
}

async function remover(id) {
  const clientes = await listar();
  const filtrados = clientes.filter((c) => c.id !== id);
  await AsyncStorage.setItem(chave, JSON.stringify(filtrados));
}

export default { listar, salvar, atualizar, remover };
