import {
    Text,
    View,
    TextInput,
    StyleSheet,
    StyleProp,
    ViewStyle,
} from "react-native";
import { Colors } from "@/theme/color";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

interface Props {
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    iconLeft?: keyof typeof Ionicons.glyphMap;
    iconRight?: keyof typeof Ionicons.glyphMap;
    label: string;
    error?: string;
    isDark?: boolean;
    style?: StyleProp<ViewStyle>;
}

export default function InputField({
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    iconLeft,
    iconRight,
    label,
    error,
    isDark,
    style,
}: Props) {
    const [focused, setFocused] = React.useState(false); // when user click on the input field then isFocused will be true and border color will change

    const color = isDark ? Colors.dark : Colors.light; // dark mode or light mode switch based on isDark

    return (
        // container of Input
        <View style={styles.container}>
            {/* Label of Input */}
            <Text style={[styles.label, { color: color.textPrimary }]}>
                {label}
            </Text>

            {/* Input Container */}
            {/* if there is error then border color will be red*/}
            <View
                style={[
                    styles.inputContainer,
                    {
                        backgroundColor: color.inputBackground,
                        borderColor: color.inputBorder,
                    },
                    focused && { borderColor: color.inputBorderFocus },
                    style,
                ]}
            >
                {/* Icon of Input */}
                {iconLeft && (
                    <Ionicons
                        name={iconLeft}
                        size={20}
                        color={focused ? color.primary : color.inputIcon}
                    />
                )}

                {/* Input Field */}
                <TextInput
                    style={[styles.input, { color: color.inputText }]}
                    placeholder={placeholder}
                    placeholderTextColor={color.textSecondary}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                />
                {iconRight && (
                    <Ionicons
                        name={iconRight}
                        size={20}
                        color={focused ? color.primary : color.inputIcon}
                    />
                )}
            </View>
            {/* if error? then will display error msg */}
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 8,
    },
    inputContainer: {
        borderRadius: 30,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        flex: 1,
    },
    label: {
        fontSize: 12,
        fontFamily: "Poppins-SemiBold",
        marginLeft: 8,
    },
    errorText: {
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: "red",
        marginLeft: 8,
        marginTop: 2,
        marginBottom: 3,
    },
    errorContainer: {
        borderColor: "red",
    },
});
