import { UserProvider } from "@/context/USerContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
}
