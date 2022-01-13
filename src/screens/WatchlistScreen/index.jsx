import {  View, Text, FlatList, RefreshControl } from 'react-native'
import CoinItem from '../../components/CoinItem';
import { useWatchlist } from '../../Contexts/WatchlistContext'

const WatchlistScreen = () => {
    const {value} = useWatchlist
    console.log(value);
    return (
        <View>
            <Text style={{color: 'white'}}>Hello Watchlist</Text>
        </View>
    )
}

export default WatchlistScreen

