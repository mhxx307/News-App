import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useContext } from 'react';

import { categories, sources } from '~/store/api';
import { NewsContext } from '~/store/context';
import Search from '~/components/Search';

export default function DiscoverScreen() {
    const { setCategory, setSource, darkTheme } = useContext(NewsContext);
    const windowWidth = Dimensions.get('window').width;
    const SLIDER_WIDTH = Math.round(windowWidth / 3.5);

    return (
        <View style={styles.discover}>
            {/* search */}
            <Search />

            {/* categories */}
            <Text
                style={{
                    ...styles.subtitle,
                    color: darkTheme ? 'white' : 'black',
                }}
            >
                Categories
            </Text>
            <Carousel
                layout={'default'}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.category}
                        onPress={() => setCategory(item.name)}
                    >
                        <Image source={item.pic} style={styles.categoryImage} />
                        <Text
                            style={{
                                ...styles.name,
                                color: darkTheme ? 'white' : 'black',
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                sliderWidth={windowWidth}
                itemWidth={SLIDER_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />

            {/* source */}
            <Text
                style={{
                    ...styles.subtitle,
                    color: darkTheme ? 'white' : 'black',
                }}
            >
                Source
            </Text>
            <View style={styles.sources}>
                {sources.map((s) => (
                    <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={s.pic} style={styles.sourceImage} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        borderRadius: 10,
    },
    categoryImage: {
        height: '60%',
        width: '100%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 13,
        textTransform: 'capitalize',
    },
    category: {
        height: 130,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sourceContainer: {
        height: 150,
        width: '40%',
        borderRadius: 10,
        margin: 15,
        backgroundColor: '#cc313d',
    },
    sourceImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    sources: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
});
