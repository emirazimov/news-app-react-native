import { StatusBar } from "expo-status-bar"
import { Image, Text, View } from "react-native"
import styled from "styled-components/native"

const PostView = styled.View`
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
  border-radius: 20px;
  margin-right: 12px;
`
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`
const PostDetails = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>

    // <StatusBar theme="auto" />
  )
}
