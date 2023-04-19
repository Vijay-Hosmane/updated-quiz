import {
  Button,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { Formik } from "formik";
import AppContext from "../Context/Context";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";

const Home = ({ navigation }: any) => {
  const {
    inputValues,
    setInputValues,
    lang,
    setLang,
    error,
    setError,
    phone,
    setPhone,
    emailError,
    setEmailError,
    nameError,
    setNameError,
  }: any = useContext(AppContext);

  console.log("i", inputValues);
  console.log("lang", lang);
  const [option, setOption] = React.useState("");
  const [optionVisible, setOptionVisible] = React.useState(false);
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000",
          }}
          style={styles.banner}
          resizeMode="contain"
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <Text style={styles.header}>Enter your details</Text>
            <Formik
              initialValues={{ name: "", email: "", lang: "", phone: "" }}
              onSubmit={(values, actions) => {
                setInputValues(values);

                console.log("samplei", inputValues);
                {
                  phone.length == 10
                    ? (actions.resetForm(),
                      // navigation.navigate("Quetions"),
                      setPhone(""),
                      setError(false))
                    : setError(true);
                }
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
                if (!regex.test(values.email)) {
                  setEmailError(true);
                } else {
                  setEmailError(false);
                }
                {
                  values.name.length < 4
                    ? setNameError(true)
                    : setNameError(false);
                }
              }}
            >
              {(props) => (
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: "2%",
                  }}
                >
                  {nameError && (
                    <Text
                      style={{
                        position: "absolute",
                        top: -8,
                        left: 20,
                        fontSize: 16,
                        color: "red",
                      }}
                    >
                      *This is not the valid name
                    </Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={props.handleChange("name")}
                    value={props.values.name}
                  />
                  {emailError && (
                    <Text
                      style={{
                        position: "absolute",
                        top: 70,
                        left: 20,
                        fontSize: 16,
                        color: "red",
                      }}
                    >
                      *This is not a valid email format!
                    </Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                  {error && (
                    <Text
                      style={{
                        position: "absolute",
                        top: 145,
                        left: 20,
                        fontSize: 16,
                        color: "red",
                      }}
                    >
                      *Invalid mobile number
                    </Text>
                  )}

                  <TextInput
                    style={styles.input}
                    dataDetectorTypes="phoneNumber"
                    keyboardType="phone-pad"
                    placeholder="Enter your Mobile number"
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      width: "100%",
                      paddingHorizontal: "5%",
                    }}
                  >
                    Pick a language of your choice
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.input1}
                    onPress={() => setOptionVisible(!optionVisible)}
                  >
                    <Text style={{ fontSize: 18 }}>{lang}</Text>
                  </TouchableOpacity>
                  {optionVisible && (
                    <>
                      <TouchableOpacity
                        style={styles.options}
                        onPress={() => {
                          setOptionVisible(!optionVisible), setLang("react");
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>React</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.options}
                        onPress={() => {
                          setOptionVisible(!optionVisible), setLang("angular");
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>Angular</Text>
                      </TouchableOpacity>
                    </>
                  )}

                  <View style={styles.subButton}>
                    <TouchableOpacity
                      style={styles.button}
                      disabled={
                        !props.values.name ||
                        !props.values.email ||
                        !phone ||
                        !lang
                      }
                      //onPress={props.handleSubmit}
                      onPress={() => navigation.navigate("Quetions")}
                    >
                      <Text style={{ color: "white", fontSize: 16 }}>
                        submit
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  banner: {
    height: 300,
    width: 300,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },

  form: {
    alignSelf: "center",
    width: "90%",
    position: "absolute",
    top: 250,
    justifyContent: "center",
    backgroundColor: "#c8d6e5",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: "4%",
    marginVertical: "2%",
  },
  input: {
    width: "90%",
    height: 45,
    borderRadius: 3,
    margin: 15,
    paddingLeft: 5,
    borderWidth: 1.5,
    fontSize: 18,
    backgroundColor: "white",
  },
  input1: {
    width: "90%",
    backgroundColor: "white",
    height: 45,
    borderWidth: 1.5,
    marginTop: "4%",
    justifyContent: "center",
    paddingHorizontal: "2%",
    fontSize: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: "500",
    paddingBottom: 10,
    color: "black",
  },
  subButton: {
    marginTop: 10,
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0a3d62",
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 20,
    paddingVertical: "4%",
    marginVertical: "2%",
  },
  options: {
    backgroundColor: "white",
    width: "90%",
    padding: "4%",
    marginVertical: "1%",
  },
});
export default Home;
