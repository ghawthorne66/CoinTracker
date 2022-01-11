import React from 'react'
import { Text, View, Image } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import styles from "./styles"

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1_000_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(4)} T`
    }
    if (marketCap >= 1_000_000_000 && marketCap < 1_000_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(3)} B`
    }
    if (marketCap >= 1_000_000 && marketCap < 1_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(3)} M`
    }
  }

  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" 

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{ height: 20, width: 20, marginRight: 10 }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{capitalize(symbol)}</Text>
          <AntDesign
          name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
          size={12}
          color={percentageColor}
          style={{ alignSelf: "center", marginRight: 5 }} />
          <Text style={{color: percentageColor}}>
            {price_change_percentage_24h.toFixed(3)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price.toFixed(4)}</Text>
        <Text style={{ color: "white" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  )
}

export default CoinItem
