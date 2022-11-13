import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { useContext } from 'react';

import styles from './styles';
import { NewsContext } from '~/store/context';

export default function SingleNews({ item, index }) {
    const { darkTheme } = useContext(NewsContext);
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.urlToImage }} style={styles.image} />

            <View
                style={{
                    ...styles.description,
                    backgroundColor: darkTheme ? '#282c35' : 'white',
                }}
            >
                <Text
                    style={{
                        ...styles.title,
                        color: darkTheme ? 'white' : 'black',
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    style={{
                        ...styles.content,
                        color: darkTheme ? 'white' : 'black',
                    }}
                >
                    {item.description}
                </Text>
                <Text
                    style={{
                        color: darkTheme ? 'white' : 'black',
                    }}
                >
                    Short by
                    <Text>{item.author ?? 'unknown'}</Text>
                </Text>

                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}
                >
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    );
}
