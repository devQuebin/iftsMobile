import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useUserContext } from "@/context/USerContext";

export default function Register() {
  const { addUser, users } = useUserContext(); // uso de los metodos del context para crear o validar el usuario
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // valida si existe el usuario, sino tira el alerta
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      Alert.alert("Error", "El nombre de usuario ya existe.");
      return;
    }

    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    // si esta todo bien crea el usuario
    addUser({ username, password });
    Alert.alert("Éxito", "Usuario registrado correctamente.");
    router.replace("/"); // te lleva al inicio para que hagas login con el usuario que creaste
  };
  //para que el usuario pueda volver a la pagina anterior en caso de arrepentimiento
  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cat-icon.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Registrar Nuevo Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>
      <Text style={styles.cancelText} onPress={handleCancel}>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  cancelText: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
