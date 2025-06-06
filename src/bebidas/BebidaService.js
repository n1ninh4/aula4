import AsyncStorage from '@react-native-async-storage/async-storage';
const chave = '@bebidas';

async function listar() {
  const json = await AsyncStorage.getItem(chave);
  return json ? JSON.parse(json) : [];
}

async function salvar(bebida) {
  bebida.id = new Date().getTime();
  const bebidas = await listar();
  bebidas.push(bebida);
  await AsyncStorage.setItem(chave, JSON.stringify(bebidas));
}

async function atualizar(bebidaAtualizada) {
  const bebidas = await listar();
  const atualizadas = bebidas.map((b) => (b.id === bebidaAtualizada.id ? bebidaAtualizada : b));
  await AsyncStorage.setItem(chave, JSON.stringify(atualizadas));
}

async function remover(id) {
  const bebidas = await listar();
  const filtradas = bebidas.filter((b) => b.id !== id);
  await AsyncStorage.setItem(chave, JSON.stringify(filtradas));
}

export default { listar, salvar, atualizar, remover };
