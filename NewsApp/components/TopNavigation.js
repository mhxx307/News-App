import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { NewsContext } from "../API/Context";

export default function TopNavigation({ index, setIndex }) {
    const { fetchNews, setDarkTheme, darkTheme } = useContext(NewsContext);
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme ? "#282c35" : "white",
            }}
        >
            {index === 0 ? (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setDarkTheme(!darkTheme)}
                >
                    <Text
                        style={{
                            ...styles.text,
                            color: darkTheme ? "lightgrey" : "white",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="theme-light-dark"
                            size={24}
                            color="#007fff"
                        />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
                    <Text
                        style={{
                            ...styles.text,
                            color: darkTheme ? "lightgrey" : "black",
                        }}
                    >
                        Discover
                    </Text>
                </TouchableOpacity>
            )}

            <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
                {index ? "All News" : "Discover"}
            </Text>

            {index === 1 ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews("general")}
                >
                    <Text style={styles.text}>
                        <AntDesign name="reload1" size={24} color="#007fff" />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text
                        style={{
                            ...styles.text,
                            color: darkTheme ? "lightgrey" : "black",
                        }}
                    >
                        All News
                    </Text>
                    <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    left: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 80,
    },
    text: {
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems: "flex-end",
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007fff",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
    },
});
