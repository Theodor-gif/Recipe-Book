import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { contextData } from "../context/contextApi";
import styled from "styled-components/native";
import { TextInput } from "react-native";
import RecipesDetail from "./RecipesDetail";

const SearchHeader = ({ search, setSearch }) => (
  <HeaderContainer>
    <SearchImage source={require("../assets/Search-icon.png")} />
    <SearchText
      placeholder="Search recipes ..."
      value={search}
      onChangeText={setSearch}
      autoCapitalize="none"
      autoCorrect={false}
    />
  </HeaderContainer>
);

const RecipesList = ({ navigation }) => {
  const { data, loading, search, setSearch } = useContext(contextData);
  if (loading) return <Text>Loading ...</Text>;

  return (
    <Safe edges={["top"]} style={{ flex: 1 }}>
      <List
        data={data}
        renderItem={({ item }) => (
          <Container>
            <RecipeImage source={require("../assets/Food-icon.png")} />
            <Category>{item.category}</Category>
            <TimeContainer>
              <TimeIcon source={require("../assets/Time-icon.png")} />
              <Duration>{item.duration}</Duration>
            </TimeContainer>
            <InfoContainer>
              <RecipeName>{item.title}</RecipeName>
              <ButtonContainer>
                <Button
                  onPress={() =>
                    navigation.navigate("RecipesDetail", { id: item._id })
                  }
                >
                  <ButtonText>VIEW</ButtonText>
                </Button>
              </ButtonContainer>
            </InfoContainer>
          </Container>
        )}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <SearchHeader search={search} setSearch={setSearch} />
        }
        ListFooterComponent={() => (
          <FooterContainer>
            <Text>&copy; RECIPE BOOK | TM</Text>
          </FooterContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Safe>
  );
};

const Safe = styled(SafeAreaView)`
  flex: 1;
`;

const List = styled.FlatList`
  flex: 1;
  position: relative;
`;

const Container = styled.View`
  width: 80%;
  margin: 0 auto 50px auto;
  border-radius: 20px;
  box-shadow: 0px 1px 2px #27190030;
  background-color: white;
  height: 270px;
`;

const Title = styled.Text`
  color: red;
`;

const Category = styled.Text`
  color: green;
  position: absolute;
  top: 15px;
  left: 210px;
  font-size: 2rem;
  width: 100px;
  text-align: right;
`;

const Duration = styled.Text`
  color: black;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const HeaderContainer = styled.View`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 70%;
  margin: 20px auto 50px auto;
  padding: 10px;
  border-radius: 20px;
`;

const FooterContainer = styled.View`
  margin: 100px 0 10px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #e2d9cc;
`;

const TimeContainer = styled.View`
  position: absolute;
  top: 155px;
  left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
  width: 120px;
  height: 40px;
  gap: 5px;
`;

const RecipeName = styled.Text`
  flex: 1;
  font-weight: bold;
  color: green;
  padding-top: 5px;
  padding-left: 20px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const Button = styled.TouchableOpacity`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #d96b43;
  box-shadow: 1px 2px 5px grey;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

const SearchImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const SearchText = styled.TextInput`
  font-size: 15px;
`;

export default RecipesList;
