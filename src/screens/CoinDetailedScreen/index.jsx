import { View, Text } from "react-native"
import Coin from "../../../assets/data/crypto.json"
import CoinDetailHeader from "./components/CoinDetailedHeader"

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = Coin
  return (
    <View style={{paddingHorizontal: 10}}>
      <CoinDetailHeader
        image={small}
        name={name}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <Text style={{color: 'white', fontSize: 15}}>{name}</Text>
      <Text style={{color: 'white', fontSize: 30, fontWeight: '600', letterSpacing: 1}}>${current_price.usd}</Text>
    </View>
  )
}

export default CoinDetailedScreen
