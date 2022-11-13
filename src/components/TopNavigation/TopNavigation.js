import { View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import {
    AntDesign,
    MaterialCommunityIcons,
    SimpleLineIcons,
} from '@expo/vector-icons';

import styles from './styles';
import { NewsContext } from '~/store/context';

export default function TopNavigation({ index, setIndex }) {
    const { fetchNews, setDarkTheme, darkTheme } = useContext(NewsContext);

    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme ? '#282c35' : 'white',
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
                            color: darkTheme ? 'lightgrey' : 'white',
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
                    <SimpleLineIcons
                        name="arrow-left"
                        size={15}
                        color="#007fff"
                    />
                    <Text
                        style={{
                            ...styles.text,
                            color: darkTheme ? 'lightgrey' : 'black',
                        }}
                    >
                        Discover
                    </Text>
                </TouchableOpacity>
            )}

            <Text
                style={{
                    ...styles.center,
                    color: darkTheme ? 'white' : 'black',
                }}
            >
                {index ? 'All News' : 'Discover'}
            </Text>

            {index === 1 ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews('general')}
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
                            color: darkTheme ? 'lightgrey' : 'black',
                        }}
                    >
                        All News
                    </Text>
                    <SimpleLineIcons
                        name="arrow-left"
                        size={15}
                        color="#007fff"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}
