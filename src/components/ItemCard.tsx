import Ionicons from '@expo/vector-icons/Ionicons'
// import { useNavigation } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser'
import React, { useCallback } from 'react'
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native'
import config from '../config'

interface Props {
  id: string
  title: string
  author: string
  url: string
}

function ItemCard({
  id, author, title, url,
}: Props) {
  // const navigation = useNavigation()
  const handleOnPress = useCallback((source) => {
    WebBrowser.openBrowserAsync(source)
  }, [])

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleOnPress(url)} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
        <Text>
          {`By: ${author}`}
        </Text>
      </TouchableOpacity>
      <Ionicons
        name="md-chatbubble-ellipses-outline"
        size={32}
        color="white"
        onPress={() => handleOnPress(`${config.HNUrl}/item?id=${id}`)}
        style={styles.icon}
      />
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ff6600',
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    marginRight: 10,
    flex: 4,
  },
  icon: {
    flex: 0.5,
    margin: 5,
    marginLeft: 0,
    padding: 10,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    alignSelf: 'center',
  },
})
