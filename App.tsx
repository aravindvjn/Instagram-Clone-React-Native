import { View } from "react-native";
import AuthScreen from "./screen/AuthScreen";
import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import LikeScreen from "./screen/LikeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileScreen from "./screen/ProfileScreen";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
