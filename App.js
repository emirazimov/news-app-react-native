import { StatusBar } from "expo-status-bar"
import { Image, Text, View } from "react-native"
import styled from "styled-components/native"
import { Post } from "./components/Post"

export default function App() {
  return (
    <View>
      <Post
        title="Тест"
        createdAt="20/12/22"
        imageUri="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png"
      />
      <StatusBar theme="auto" />
    </View>
  )
}
