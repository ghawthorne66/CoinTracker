import axios from "axios"

export const getDetailedCoin = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&community_data=false&developer_data=false&sparkline=false`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCoinMarketChart = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
