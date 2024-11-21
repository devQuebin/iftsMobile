import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useUserContext } from "@/context/USerContext";

export default function Login() {
  const router = useRouter();
  const { users, setCurrentUser } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validacion
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setCurrentUser(user);
      router.push("/home");
    } else {
      // si no es correcto
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };
  //para que el usuario pueda volver a la pagina anterior en caso de arrepentimiento
  const handleCancel = () => {
    router.back();
  };

  const redirectRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cat-icon.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.inputText}>Usuario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.inputText}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleLogin} />
      <Text style={styles.bottomText}>
        Si no tienes cuenta,{" "}
        <Text style={styles.linkText} onPress={redirectRegister}>
          regístrate.
        </Text>
      </Text>

      <Text style={styles.linkText} onPress={handleCancel}>
        Cancelar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 5,
  },
  inputText: {
    marginBottom: 10,
  },
  bottomText: {
    marginTop: 30,
  },
  linkText: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
