import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/theme/color";

interface Props {
    label: String;
    disabled?: boolean;
    onPress: () => void;
    isDark?: boolean;
    style?: Object;
}

export default function Button({
    label,
    disabled,
    onPress,
    isDark,
    style,
}: Props) {
    const color = isDark ? Colors.dark : Colors.light;

    const buttonStyle = [
        styles.button,
        { backgroundColor: color.primary },
        style,
    ];

    const textStyle = [styles.text, { color: color.textPrimary }, style];

    return (
        <Pressable style={buttonStyle} onPress={onPress} disabled={disabled}>
            <Text style={textStyle}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 15,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 30,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        marginTop: 10,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
    },
});
