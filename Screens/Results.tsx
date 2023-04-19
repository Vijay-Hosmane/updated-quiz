// import { StyleSheet, Text, View } from "react-native";
// import React, { useContext } from "react";
// import AppContext from "../Context/Context";
// import { SafeAreaView } from "react-native-safe-area-context";
// //import PieChart from "react-native-pie-chart";
// import { VictoryPie } from "victory-native";
// // import PieChart from "react-native-pie-chart";
// import { PieChart } from "react-native-svg-charts";

// const Results = () => {
//   const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

//   const randomColor = () =>
//     ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
//       0,
//       7
//     );

//   const pieData = data
//     .filter((value) => value > 0)
//     .map((value, index) => ({
//       value,
//       svg: {
//         fill: randomColor(),
//         onPress: () => console.log("press", index),
//       },
//       key: `pie-${index}`,
//     }));
//   // const data = [
//   //   { month: 1, ear: 10 },
//   //   { month: 2, ear: 20 },
//   // ];
//   const { count, crct } = useContext(AppContext);
//   const widthAndHeight = 250;
//   const series = [123, 321, 123, 789, 537];
//   const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
//   return (
//     <SafeAreaView style={styles.container}>
//       <PieChart style={{ height: 200 }} data={pieData} />
//     </SafeAreaView>
//   );
// };

// export default Results;

// const styles = StyleSheet.create({
//   container: {},
// });
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { PieChart } from "react-native-chart-kit";
import AppContext from "../Context/Context";
export default function Results({ navigation }: any) {
  const {
    count,
    crct,
    setCount,
    setCrct,
    setCurrent,
    setArray,
    setChecked,
    setChecked1,
    setChecked2,
    setChecked3,
    setChecked4,
    setTemp,
  }: any = useContext(AppContext);
  console.log("count", count, "correct", crct);

  const data = [
    {
      name: "Correct",
      population: crct,
      color: "#4cd137",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Wrong",
      population: count - crct,
      color: "#eb2f06",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Unanswered",
      population: 5 - count,
      color: "#8395a7",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const resultBanner =
    crct > 3
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";

  const handleHome = () => {
    navigation.navigate("Home");
    setCount(0);
    setCrct(0);
    setCurrent(1);
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setTemp(null);
  };
  const handleRestart = () => {
    navigation.navigate("Quetions");
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setTemp(null);
    setCount(0);
    setCrct(0);
    setCurrent(1);
    let newarray = [];
    for (let i = 1; i < 6; i++) {
      newarray.push({
        id: i,
        ans: false,
      });
    }
    setArray(newarray);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Results</Text>
      <Text></Text>
      <PieChart
        data={data}
        width={350}
        height={250}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
      <Image
        source={{
          uri: resultBanner,
        }}
        style={styles.banner}
        resizeMode="contain"
      />
      {crct > 3 ? (
        <Text style={styles.text}>Wow..It was a great performance</Text>
      ) : (
        <Text style={styles.text1}>Need some Practice</Text>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <TouchableOpacity style={styles.Home} onPress={handleHome}>
          <Text style={{ color: "white", fontSize: 18 }}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.restart} onPress={handleRestart}>
          <Text style={{ color: "white", fontSize: 18 }}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  banner: {
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    color: "blue",
  },
  text1: {
    fontSize: 22,
    fontWeight: "500",
    color: "orange",
  },
  Home: {
    width: 120,
    height: 40,
    backgroundColor: "#1e3799",
    borderRadius: 4,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  restart: {
    width: 120,
    height: 40,
    backgroundColor: "#1e3799",
    borderRadius: 4,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
