import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { contextData } from "../context/contextApi";
import styled from "styled-components/native";

const RecipesList = () => {
  const { data, loading } = useContext(contextData);
  if (loading) return <Text>Loading ...</Text>;

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <List
        data={data}
        renderItem={({ item }) => (
          <Container>
            <RecipeImage source={require("../assets/Food-icon.png")} />
            <Title>{item.title}</Title>
            <Category>{item.category}</Category>
            <Duration>{item.duration}</Duration>
          </Container>
        )}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={() => (
          <HeaderContainer>
            <Text>Hello</Text>
            <Text>{data.length} recipes loaded</Text>
          </HeaderContainer>
        )}
        ListFooterComponent={() => (
          <FooterContainer>
            <Text>End</Text>
          </FooterContainer>
        )}
      />
    </SafeAreaView>
  );
};

const List = styled.FlatList`
  flex: 1;
`;

const Container = styled.View`
  border: 1px solid red;
`;

const Title = styled.Text`
  color: red;
`;

const Category = styled.Text`
  color: green;
`;

const Duration = styled.Text`
  color: black;
`;

const RecipeImage = styled.Image`
  width: 100px;
  height: 50px;
`;

const HeaderContainer = styled.View`
  padding: 100px;
  border: 1px solid green;
  margin-bottom: 50px;
`;

const FooterContainer = styled.View`
  border: 1px solid red;
  padding: 100px;
  margin-bottom: 100px;
`;

export default RecipesList;
