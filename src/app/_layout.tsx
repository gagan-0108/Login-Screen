import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    const [loaded] = useFonts({
        "Poppins-Regular": Poppins_400Regular,
        "Poppins-Medium": Poppins_500Medium,
        "Poppins-SemiBold": Poppins_600SemiBold,
        "Poppins-Bold": Poppins_700Bold,
        "Poppins-Black": Poppins_900Black,
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
    );
}
