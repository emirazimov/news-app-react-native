import { StatusBar } from "expo-status-bar"
import { Image, Text, View } from "react-native"
import styled from "styled-components/native"

const Post = styled.View`
  flex-direction: row;
  /* flex: 1; */
  padding: 15px;
  /* background-color: red; */
  height: auto;
  /* height: 100px;
  width: 100px; */
  /* border-radius: 30px; */
  margin-top: 16%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 12px;
`
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`
const PostDetails = styled.View``

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: "https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png",
          }}
        />
        <PostDetails>
          <PostTitle>Тестовая статья</PostTitle>
          <PostDate>20/12/2022</PostDate>
        </PostDetails>
      </Post>

      <StatusBar theme="auto" />
    </View>
  )
}
