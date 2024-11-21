import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useUserContext } from "@/context/USerContext";

export default function Home() {
  const router = useRouter();
  const { currentUser } = useUserContext();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cat-icon.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>¡Bienvenido, {currentUser?.username}!</Text>

      {/* Botón de Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <AntDesign name="logout" size={20} color="white" style={styles.icon} />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: "row", // Para que el texto y el ícono estén alineados
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8, // Espacio entre el ícono y el texto
    fontWeight: "bold",
  },
  icon: {
    marginRight: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
});
