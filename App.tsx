import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { COLORS } from "./global/constants/color";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
export default function App() {
  useEffect(() => {
    const prepareResources = async () => {
      SplashScreen.hideAsync();
    };

    prepareResources();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={{ backgroundColor: COLORS?.BACKGROUND_COLOR }}>
        <Routes />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
