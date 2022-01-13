import { View, Text, Image } from "react-native"
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"


const CoinDetailHeader = (props) => {
  const { image, symbol, marketCapRank } = props
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <Entypo name="chevron-left" size={24} color="white"  onPress={() => navigation.goBack()}/>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      {/* <Feather name="user" size={24} color="white" /> */}
      <FontAwesome name="star-o" size={24} color="white" />
    </View>
  )
}

export default CoinDetailHeader
