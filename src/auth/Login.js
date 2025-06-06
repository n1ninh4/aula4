import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "363396965896-ku1a7b7jccslc8go1ghuqjp8n5kiihcqq.apps.googleusercontent.com",
    // opcional: use também clientId do Android e iOS se tiver criado
    redirectUri: makeRedirectUri({
      scheme: "domlele",
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      const credential = GoogleAuthProvider.credential(null, authentication.accessToken);
      signInWithCredential(auth, credential)
        .then((result) => setUserInfo(result.user))
        .catch((error) => console.error("Erro no login:", error));
    }
  }, [response]);

  return (
    <>
      <Button
        title="Entrar com Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
      {userInfo && <Text>Bem-vindo, {userInfo.displayName}</Text>}
    </>
  );
}

