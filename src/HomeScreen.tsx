import React from 'react'
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import ItemCard from './components/ItemCard'
import useBestStories from './hooks/useBestStories'

function HomeScreen() {
  const { error, isFetchingStories, stories } = useBestStories()

  // missing: pagination
  // fetch de comments (i.e. in a custom hook)

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{`An error has occurred: ${error?.message}`}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {isFetchingStories
        ? <ActivityIndicator size="large" color="purple" />
        : (
          <FlatList
            data={stories}
            renderItem={({ item }) => (
              <ItemCard key={item.id} author={item.by} title={item.title} url={item.url} />
            )}
            onEndReachedThreshold={20}
            onEndReached={() => {}}
          />
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default HomeScreen
