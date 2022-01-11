import { StyleSheet } from "react-native"
// import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tickerTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5
  },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  name: {
    color: "white",
    fontSize: 15,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
})

export default styles
