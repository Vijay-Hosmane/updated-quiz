import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import AppContext from "./Context/Context";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Quetions from "./Screens/Quetions";
import { useState } from "react";
import Results from "./Screens/Results";

type ArrayType = {
  id: number;
  ans: boolean;
};

const Stack = createStackNavigator();
export default function App() {
  const [inputValues, setInputValues] = useState<any>();
  const [current, setCurrent] = useState(1);
  const [array, setArray] = useState<ArrayType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [crct, setCrct] = useState<number>(0);
  const [lang, setLang] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState<number>();
  const [temp, setTemp] = useState<number>();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        inputValues,
        setInputValues,
        current,
        setCurrent,
        array,
        setArray,
        count,
        setCount,
        crct,
        setCrct,
        lang,
        setLang,
        checked,
        setChecked,
        error,
        setError,
        phone,
        setPhone,
        checked1,
        setChecked1,
        checked2,
        setChecked2,
        checked3,
        setChecked3,
        checked4,
        setChecked4,
        checked5,
        setChecked5,
        temp,
        setTemp,
        emailError,
        setEmailError,
        nameError,
        setNameError,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Quetions" component={Quetions} />
          <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
