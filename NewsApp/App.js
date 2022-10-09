import { useContext } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Context, { NewsContext } from "./API/Context";
import ShortTabs from "./components/ShortTabs";

function App() {
    const { darkTheme } = useContext(NewsContext);
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme ? "#282c35" : "white",
            }}
        >
            <ShortTabs />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});

// export context
export default () => {
    return (
        <Context>
            <App />
        </Context>
    );
};
