import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  title: string
  author: string
}

function ItemCard({ author, title }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>
        {`By: ${author}`}
      </Text>
    </View>
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
