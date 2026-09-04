import React from "react";
import { Text } from "react-native";
import AuthRoutes from "./auth.routes";

export default function AppRoutes() {
  const user = {} as object;

  return <>{user ? <AuthRoutes /> : <Text>App</Text>}</>;
}
