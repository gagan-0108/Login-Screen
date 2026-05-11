import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable,
    Text,
} from "react-native";
import * as react from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/theme/color";
import InputField from "@/Components/InputField";
import Headers from "@/Components/Headers";
import Button from "@/Components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = react.useState("");
    const [password, setPassword] = react.useState("");
    const [confirmPassword, setConfirmPassword] = react.useState("");

    const theme = Colors.light;

    return (
        <SafeAreaView
            style={[styles.safeArea, { backgroundColor: theme.background }]}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid
                    extraScrollHeight={60}
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
                        <View style={styles.logoContainer}>
                            <Image
                                source={require("@/assets/icons/logo.png")}
                                style={{ height: 80, width: 80 }}
                                resizeMode="contain"
                            />
                        </View>
                        <Headers
                            title="Sign Up"
                            description="Sign up in 1 minute for free!"
                        />

                        <InputField
                            label="Email Address"
                            placeholder="Enter your email..."
                            value={email}
                            onChangeText={setEmail}
                            iconLeft="mail"
                        />

                        <InputField
                            label="Password"
                            placeholder="Enter your password..."
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            iconLeft="lock-closed"
                        />
                        <InputField
                            label="Password Confirmation"
                            placeholder="Re-enter your password..."
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            iconLeft="lock-closed"
                            error={
                                password !== confirmPassword
                                    ? " Error: Passwords do not match!"
                                    : undefined
                            }
                            style={{
                                marginBottom: 20,
                            }}
                        />
                        <Button
                            label="Sign Up"
                            onPress={() => {}}
                            disabled={password !== confirmPassword}
                        />

                        <View style={styles.footerContainer}>
                            <Text
                                style={[
                                    styles.footerText,
                                    { color: theme.textSecondary },
                                ]}
                            >
                                Already have an account?{" "}
                            </Text>
                            <Pressable onPress={() => router.push("/")}>
                                <Text
                                    style={[
                                        styles.footerLink,
                                        { color: theme.primary },
                                    ]}
                                >
                                    Sign In.
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 24,
        paddingTop: 8,
    },
    topBar: {
        width: "100%",
        marginBottom: 20,
        alignItems: "flex-start",
    },
    backButton: {
        width: 38,
        height: 38,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        marginBottom: 24,
    },
    formContainer: {
        width: "100%",
        gap: 20,
        marginBottom: 30,
        marginTop: 40,
    },
    socialContainer: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 30,
    },
    socialButton: {
        width: 60,
        height: 60,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    footerContainer: {
        marginTop: 20,
        flexDirection: "row",
    },
    footerText: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
    },
    footerLink: {
        fontSize: 14,
        fontFamily: "Poppins-SemiBold",
    },
    forgotPassword: {
        fontSize: 14,
        fontFamily: "Poppins-SemiBold",
    },
});
