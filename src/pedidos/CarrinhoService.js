import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@carrinho';

async function listar() {
  const json = await AsyncStorage.getItem(CHAVE);
  return json ? JSON.parse(json) : [];
}

async function adicionar(item) {
  const carrinho = await listar();
  // Verifica se o item já está no carrinho
  const index = carrinho.findIndex((i) => i.id === item.id);
  if (index >= 0) {
    carrinho[index].quantidade += item.quantidade;
  } else {
    carrinho.push(item);
  }
  await AsyncStorage.setItem(CHAVE, JSON.stringify(carrinho));
}

async function remover(id) {
  const carrinho = await listar();
  const filtrados = carrinho.filter((i) => i.id !== id);
  await AsyncStorage.setItem(CHAVE, JSON.stringify(filtrados));
}

async function limpar() {
  await AsyncStorage.removeItem(CHAVE);
}

export default {
  listar,
  adicionar,
  remover,
  limpar,
};
