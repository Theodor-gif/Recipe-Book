import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { contextData } from "../context/contextApi";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipesDetail = ({ navigation }) => {
  const { params } = useRoute();
  const { id } = params;
  const { data } = useContext(contextData);

  const recipe = data.find((item) => item._id === id);

  if (!recipe) return <Text>Loading ...</Text>;
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Arrow-icon.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Fav-icon.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{recipe.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RecipesDetail;
