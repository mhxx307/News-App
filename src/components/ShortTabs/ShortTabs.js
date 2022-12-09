import { useWindowDimensions } from 'react-native';
import { useContext } from 'react';
import { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import DiscoverScreen from '~/screens/DiscoverScreen';
import NewsScreen from '~/screens/NewsScreen';
import TopNavigation from '~/components/TopNavigation';
import { NewsContext } from '~/store/context';

export default function ShortTabs() {
    const layout = useWindowDimensions();

    const { index, setIndex } = useContext(NewsContext);
    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => (
                <TopNavigation index={index} setIndex={setIndex} />
            )}
        />
    );
}
