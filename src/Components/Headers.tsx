import { Text, View, StyleSheet } from "react-native";

interface Props {
    title: string;
    description: string;
}

export default function Headers(props: Props) {
    const { title, description } = props;
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.description}>{description}</Text>
        </View>
    )
}   
const style = StyleSheet.create({
    container: {
        gap: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        marginBottom: 10,
        color: "#707472ff",
    },
})