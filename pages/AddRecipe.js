import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useContext } from "react";
import { contextData } from "../context/contextApi";
import styled from "styled-components/native";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const { handleSubmit } = useContext(contextData);

  const options = ["easy", "difficult"];

  const handleChangeIngredient = (value, index) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  const onSave = async () => {
    const cleanedIngredients = ingredients
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    const recipe = {
      title,
      instructions: text,
      time,
      difficulty,
      ingredients: cleanedIngredients,
    };

    try {
      await handleSubmit(recipe);
      // e.g. navigation.goBack() or reset form fields here
    } catch (error) {
      // show an error message to the user
      console.error("Failed to save recipe:", error);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <HeaderContainer>
        <Image
          source={require("../assets/screen.png")}
          style={{ width: 130, height: 50 }}
        />
        <NotiContainer>
          <Image
            source={require("../assets/Bell-icon.png")}
            style={{ width: 17.5, height: 17.5 }}
          />
          <Image
            source={require("../assets/Fav-icon.png")}
            style={{ width: 17.5, height: 17.5 }}
          />
        </NotiContainer>
      </HeaderContainer>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View>
          <Text>Recipe Title *</Text>
          <StyledInput
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. , Butter Chicken"
          />

          <Text>Instructions *</Text>
          <StyledInput
            value={text}
            onChangeText={setText}
            placeholder="Start with the chicken ..."
            multiline={true}
            textAlignVertical="top"
            numberOfLines={6}
            style={{ height: 120 }}
          />
        </View>

        <View>
          <Text>Prep & Cook Time</Text>
          <StyledInput
            value={time}
            onChangeText={setTime}
            placeholder="40 min"
          />

          <Text style={{ marginTop: 16 }}>Difficulty</Text>
          <DifficultyRow>
            {options.map((item, index) => {
              const isSelected = difficulty === item;
              return (
                <DifficultyOption
                  key={index}
                  selected={isSelected}
                  onPress={() => setDifficulty(item)}
                >
                  <DifficultyText selected={isSelected}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </DifficultyText>
                </DifficultyOption>
              );
            })}
          </DifficultyRow>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Ingredients *</Text>

          {ingredients.map((ingredient, index) => (
            <IngredientRow key={index}>
              <IngredientInput
                value={ingredient}
                onChangeText={(val) => handleChangeIngredient(val, index)}
                placeholder={`e.g. , 4 large eggs`}
              />
              <TouchableOpacity onPress={() => handleRemoveIngredient(index)}>
                <RemoveText>✕</RemoveText>
              </TouchableOpacity>
            </IngredientRow>
          ))}

          <AddButton onPress={handleAddIngredient}>
            <AddButtonText>+ Add Ingredient</AddButtonText>
          </AddButton>
        </View>

        <SubmitButton onPress={onSave}>
          <SubmitText>Save Recipe</SubmitText>
        </SubmitButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: #e2d9cc;
  padding: 7.5px 0px;
`;

const NotiContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  margin-right: 40px;
`;

const StyledInput = styled.TextInput`
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 8px;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 16px;
  font-size: 15px;
`;

const DifficultyRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
  gap: 12px;
`;

const DifficultyOption = styled.TouchableOpacity`
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => (props.selected ? "#F59E0B" : "#D1D5DB")};
  background-color: ${(props) => (props.selected ? "#F59E0B" : "#fff")};
`;

const DifficultyText = styled.Text`
  color: ${(props) => (props.selected ? "#fff" : "#374151")};
  font-weight: 600;
`;

const IngredientRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`;

const IngredientInput = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;
`;

const RemoveText = styled.Text`
  font-size: 18px;
  color: #ef4444;
  padding-horizontal: 6px;
`;

const AddButton = styled.TouchableOpacity`
  margin-top: 12px;
  align-self: flex-start;
`;

const AddButtonText = styled.Text`
  color: #2563eb;
  font-weight: 600;
  font-size: 15px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #2563eb;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const SubmitText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

export default AddRecipe;
