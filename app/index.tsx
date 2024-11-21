import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a Cat Rescue!</Text>
      <Text style={styles.subtitle}>
        Encontra consejos e info de adopciones :D
      </Text>
      <Image
        source={require("../assets/images/cat-icon.jpg")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={() => router.push("/login")} />
        <Button
          title="Crear Cuenta"
          onPress={() => router.push("/register")}
          color="#4CAF50"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  buttonContainer: {
    width: "80%",
    gap: 10,
  },
});
