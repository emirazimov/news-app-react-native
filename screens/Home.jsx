import axios from "axios"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import styled from "styled-components/native"
import { Post } from "../components/Post"

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState()

  const fetchPosts = () => {
    setIsLoading(true)
    axios
      .get("https://642572307ac292e3cf00e365.mockapi.io/newsappapi/v/article")
      .then(({ data }) => {
        setItems(data)
      })
      .catch((err) => {
        console.log(err)
        Alert.alert("Error", "Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(fetchPosts, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUri={item.imageUri}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
