import { View, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useContext, useState } from 'react';

import SingleNews from '~/components/SingleNews';
import styles from './styles';
import { NewsContext } from '~/store/context';

const Search = () => {
    const {
        news: { articles },
        darkTheme,
    } = useContext(NewsContext);

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(
            articles.filter((query) => query.title.includes(text)),
        );
    };

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    };

    return (
        <View style={{ position: 'relative', width: '100%' }}>
            <TextInput
                style={{
                    ...styles.search,
                    color: darkTheme ? 'white' : 'black',
                    backgroundColor: darkTheme ? 'black' : 'lightgrey',
                }}
                onChangeText={(text) => handleSearch(text)}
                placeholder="Search for news"
                placeholderTextColor={darkTheme ? 'white' : 'grey'}
            />
            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                color: darkTheme ? 'white' : 'black',
                                backgroundColor: darkTheme ? 'black' : 'white',
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        right: 0,
                        margin: 10,
                        marginTop: 20,
                    }}
                >
                    <Entypo name="circle-with-cross" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ heigh: '100%', transform: [{ scaleY: -1 }] }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View>
    );
};

export default Search;
