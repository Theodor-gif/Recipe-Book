import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { contextData } from "../context/contextApi";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { FlatList } from "react-native";

const RecipesDetail = ({ navigation }) => {
  const { params } = useRoute();
  const { id } = params;
  const { data } = useContext(contextData);
  const [reveal, setReveal] = useState(true);

  const recipe = data.find((item) => item._id === id);

  if (!recipe) return <Text>Loading ...</Text>;
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageContainer>
          <PhotoRecipe source={require("../assets/Food1-icon.png")} />
          <ArrowButton onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/Arrow-icon.png")}
              style={{ width: 20, height: 20 }}
            />
          </ArrowButton>
          <FavoriteImage>
            <Image
              source={require("../assets/Fav-icon.png")}
              style={{ width: 20, height: 20 }}
            />
          </FavoriteImage>
        </ImageContainer>
        <TitleContainer>
          <Container>
            <Title>{recipe.title}</Title>
          </Container>
          <DurationContainer>
            <Duration>
              <Image
                source={require("../assets/Time-icon.png")}
                style={{ width: 30, height: 30 }}
              />
              <Txt>{recipe.duration}</Txt>
            </Duration>
            <DurationExplain>
              <Txt>Total</Txt>
            </DurationExplain>
          </DurationContainer>
          <DurationContainer>
            <Duration>
              <Image
                source={require("../assets/Skill-icon.png")}
                style={{ width: 30, height: 30 }}
              />
              <Txt>{recipe.category}</Txt>
            </Duration>
            <DurationExplain>
              <Txt>Skill</Txt>
            </DurationExplain>
          </DurationContainer>
        </TitleContainer>
        <TitleContainer2>
          <FirstButton $reveal={reveal} onPress={() => setReveal(true)}>
            <TextBtnOne $text={reveal}>
              Ingredient({recipe.ingredients.length})
            </TextBtnOne>
          </FirstButton>
          <SecondButton $reveal={reveal} onPress={() => setReveal(false)}>
            <TextBtnTwo $text={reveal}>Instructions</TextBtnTwo>
          </SecondButton>
        </TitleContainer2>
        {reveal ? (
          <ViewBoxIngredients>
            {recipe.ingredients.map((item, index) => (
              <TextBox key={index}>{item}</TextBox>
            ))}
          </ViewBoxIngredients>
        ) : (
          <ViewBoxDescription>
            <TextBox>{recipe.description}</TextBox>
          </ViewBoxDescription>
        )}
        <FooterContainer>
          <Text>&copy; RECIPE BOOK | TM</Text>
        </FooterContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

const ImageContainer = styled.View`
  position: relative;
`;

const PhotoRecipe = styled.Image`
  width: 100%;
  height: 250px;
`;

const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 20px;
  padding: 7.5px;
  background-color: white;
`;

const FavoriteImage = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 20px;
  padding: 7.5px;
  background-color: white;
`;

const TitleContainer = styled.View`
  width: 90%;
  margin: 30px auto 0 auto;
  border-radius: 20px;
  padding: 20px 0 0 0;
  background-color: #e8e6e3;
  shadow-color: #6c6e7e;
  shadow-offset: 2px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  elevation: 5;
`;

const Container = styled.View`
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  padding-left: 30px;
  font-weight: bold;
`;

const DurationContainer = styled.View`
  background-color: #c9c9c8;
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto 20px auto;
  border-radius: 20px;
  padding: 5px;
`;

const Duration = styled.View`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;

const DurationExplain = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.Text`
  font-size: 17px;
`;

const TitleContainer2 = styled.View`
  width: 90%;
  margin: 30px auto 0 auto;
  border-radius: 20px;
  padding: 15px 0;
  background-color: #e8e6e3;
  shadow-color: #6c6e7e;
  shadow-offset: 2px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  elevation: 5;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const FirstButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  background-color: ${(props) => (props.$reveal ? "#bd744b" : "#c9c9c8")};
`;

const SecondButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
  background-color: ${(props) => (props.$reveal ? "#c9c9c8" : "#bd744b")};
`;

const TextBtnOne = styled.Text`
  color: ${(props) => (props.$text ? "white" : "black")};
`;

const TextBtnTwo = styled.Text`
  color: ${(props) => (props.$text ? "black" : "white")};
`;

const ViewBoxIngredients = styled.View`
  width: 90%;
  margin: 50px auto 60px auto;
  padding: 20px 20px;
  border-radius: 20px;
  background-color: #e8e6e3;
  shadow-color: #6c6e7e;
  shadow-offset: 2px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  elevation: 5;
  display: flex;
  gap: 5px;
`;

const ViewBoxDescription = styled.View`
  width: 90%;
  margin: 50px auto 60px auto;
  padding: 20px 20px;
  border-radius: 20px;
  background-color: #e8e6e3;
  shadow-color: #6c6e7e;
  shadow-offset: 2px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  elevation: 5;
`;

const TextBox = styled.Text`
  font-size: 17.5px;
`;

const FooterContainer = styled.View`
  margin: 60px 0 10px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #e2d9cc;
`;

export default RecipesDetail;
