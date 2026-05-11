import Button from "@/Components/Button";
import Header from "@/Components/Headers";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "@/theme/color";
import ResetPasswordMethod from "@/Components/resetPasswordMethod";

export default function ForgetPassword() {
    const router = useRouter();
    const [selectedMethod, setSelectedMethod] = useState("2fa");
    const theme = Colors.light;
    return (
        <SafeAreaProvider
            style={[styles.safeArea, { backgroundColor: theme.background }]}
        >
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Pressable
                        style={[
                            styles.backButton,
                            { backgroundColor: theme.iconContainer },
                        ]}
                        onPress={() => router.back()}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={24}
                            color={theme.textPrimary}
                        />
                    </Pressable>
                </View>

                <Header
                    title="Forgot Password"
                    description="Select which methods you'd like to reset."
                />

                <View style={styles.methodsContainer}>
                    {/* reset password components */}
                    <ResetPasswordMethod
                        icon="mail"
                        title="Email Address"
                        subtitle="Send via email address securely."
                        isSelected={selectedMethod === "email"}
                        onPress={() => setSelectedMethod("email")}
                    />

                    <ResetPasswordMethod
                        icon="phone-portrait"
                        title="2 Factor Authentication"
                        subtitle="Send via 2FA securely."
                        isSelected={selectedMethod === "2fa"}
                        onPress={() => setSelectedMethod("2fa")}
                    />

                    <ResetPasswordMethod
                        icon="lock-closed"
                        title="Google Authenticator"
                        subtitle="Send via authenticator securely."
                        isSelected={selectedMethod === "auth"}
                        onPress={() => setSelectedMethod("auth")}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button label="Reset Password" onPress={() => {}} />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    topBar: {
        width: "100%",
        marginBottom: 30,
        alignItems: "flex-start",
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
    },
    methodsContainer: {
        width: "100%",
        gap: 16,
        marginTop: 30,
        marginBottom: 40,
    },
    buttonContainer: {
        width: "100%",
    },
});
