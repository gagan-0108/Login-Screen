import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/theme/color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface Props {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    isSelected: boolean;
    onPress: () => void;
    isDark?: boolean;
}

export default function ResetPasswordMethod({
    icon,
    title,
    subtitle,
    isSelected,
    onPress,
    isDark,
}: Props) {
    const theme = isDark ? Colors.dark : Colors.light;

    return (
        <Pressable
            style={[
                styles.methodCard,
                {
                    backgroundColor: theme.cardBackground,
                    borderColor: theme.cardBorder,
                },
                isSelected && {
                    borderColor: theme.primary,
                    shadowColor: theme.primary,
                },
            ]}
            onPress={onPress}
        >
            <View
                style={[
                    styles.iconContainer,
                    { backgroundColor: theme.iconContainer },
                    isSelected && {
                        backgroundColor: theme.iconContainerSelected,
                    },
                ]}
            >
                <Ionicons
                    name={icon}
                    size={20}
                    color={isSelected ? theme.primary : theme.inputIcon}
                />
            </View>
            <View style={styles.methodTextContainer}>
                <Text
                    style={[styles.methodTitle, { color: theme.textPrimary }]}
                >
                    {title}
                </Text>
                <Text
                    style={[
                        styles.methodSubtitle,
                        { color: theme.textSecondary },
                    ]}
                >
                    {subtitle}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    methodCard: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 30,
        padding: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        gap: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    methodTextContainer: {
        flex: 1,
        gap: 4,
    },
    methodTitle: {
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
    },
    methodSubtitle: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },
});
