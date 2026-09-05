import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView edges={["top"]} style={style.container}>
      <ScrollView style={style.scrollView}>
        <ImageBackground
          source={require("../assets/Background-banner-icon.png")}
          style={style.banner}
          resizeMode="cover"
        >
          <Image
            style={style.bannerImage}
            source={require("../assets/screen.png")}
          />
        </ImageBackground>
        <View style={style.header}>
          <Text style={style.homeWelcome}>Welcome</Text>
          <Text style={style.homeTitle}>
            <Text style={style.letter}>R</Text>ecipe{" "}
            <Text style={style.letter}>B</Text>ook
          </Text>
        </View>
        <View style={style.body}>
          <Text style={style.bodyText}>
            "Every great meal starts with a good recipe. Browse, save, and cook
            your way through a growing collection built for home kitchens."
          </Text>
        </View>
        <View style={style.shortMessage}>
          <Text style={style.messageText}>
            Two steps. One recipe book. All yours.
          </Text>
        </View>
        <View style={style.moveContainer}>
          <Image
            style={style.methodIcons}
            source={require("../assets/Upload-icon.png")}
          />
          <Text style={style.methodText}>Upload</Text>
        </View>
        <View style={style.moveContainer}>
          <Image
            style={style.methodIcons}
            source={require("../assets/Save-icon.png")}
          />
          <Text style={style.methodText}>SAVE</Text>
        </View>
        <View style={style.moveContainer}>
          <Image
            style={style.methodIcons}
            source={require("../assets/Library-icon.png")}
          />
          <Text style={style.methodText}>Create Your Recipe Book</Text>
        </View>
        <View style={style.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              style.button,
              pressed && style.buttonPressed,
            ]}
          >
            <Text style={style.buttonText}>Recipes</Text>
          </Pressable>
        </View>
        <View style={style.copy}>
          <Text>&copy; RECIPE BOOK | TM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
  },
  scrollView: {},
  banner: {
    height: 200,
    alignItems: "center",
  },
  bannerImage: {
    width: 200,
    height: 50,
    marginTop: 30,
  },
  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  homeWelcome: {
    color: "#D96B43",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "700",
  },
  homeTitle: {
    color: "#557B5F",
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderColor: "#E2D9CC",
  },
  letter: {
    fontStyle: "italic",
    color: "#D96B43",
  },
  body: {
    backgroundColor: "#F4EFE6",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 17.5,
    textAlign: "center",
    lineHeight: 22.5,
  },
  methodIcons: {
    height: 50,
    width: 50,
  },
  shortMessage: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 280,
    margin: "auto",
    marginTop: 50,
    backgroundColor: "#D96B43",
    height: 70,
  },
  messageText: {
    color: "#ffffff",
    fontSize: 17.5,
    textAlign: "center",
    fontWeight: "600",
  },
  moveContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 30,
  },
  methodText: {
    color: "#557B5F",
    fontSize: 25,
    fontWeight: "bold",
    shadowColor: "#35180d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    // Android shadow
    elevation: 6,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#D96B43",
    // iOS shadow
    shadowColor: "#35180d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    // Android shadow
    elevation: 6,
    width: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
  },
  buttonPressed: {
    backgroundColor: "#C25832",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 17.5,
  },
  copy: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    height: 40,
    backgroundColor: "#E2D9CC",
  },
});

export default Home;
