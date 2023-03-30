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

const PostImage = styled.Image`
  border-radiu: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const FullPostScreen = () => {
  return (
    <>
      <PostImage
        source={{
          uri: "https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png",
        }}
      />
    </>
  )
}
