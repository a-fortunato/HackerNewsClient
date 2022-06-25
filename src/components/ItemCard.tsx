import * as WebBrowser from 'expo-web-browser'
import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  title: string
  author: string
  url: string
}

function ItemCard({ author, title, url }: Props) {
  const handleOnPress = useCallback(() => {
    WebBrowser.openBrowserAsync(url)
  }, [url])

  return (
    <TouchableOpacity style={styles.card} onPress={handleOnPress}>
      <Text style={styles.title}>{title}</Text>
      <Text>
        {`By: ${author}`}
      </Text>
    </TouchableOpacity>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'purple',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
