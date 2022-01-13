import { View, Text, FlatList, RefreshControl } from "react-native"
import CoinItem from "../../components/CoinItem"
import { useWatchlist } from "../../Contexts/WatchlistContext"

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist()

  return (
    <FlatList
      data={watchlistCoinIds}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}

    ></FlatList>
  )
}

export default WatchlistScreen
