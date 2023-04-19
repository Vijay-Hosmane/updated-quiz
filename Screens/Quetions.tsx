import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Content from "../Components/Content";
import AppContext from "../Context/Context";
import { CheckBox } from "react-native-elements";
import DraggableFlatList, {
  NestableDraggableFlatList,
  NestableScrollContainer,
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { LabelHelpers } from "victory-core";
//import CheckBox from "@react-native-community/checkbox";
const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};
const Quetions = ({ navigation }: any) => {
  const {
    current,
    setCurrent,
    array,
    setArray,
    count,
    setCount,
    crct,
    setCrct,
    inputValues,
    lang,
    checked,
    setChecked,
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
  }: any = useContext(AppContext);
  const [select, setSelected] = useState(Content.reactQ);
  const [state, setState] = React.useState(initialState);

  const handle2 = () => {
    setChecked(true);
    setCount(count + 1);
    setCrct(crct + 1);
    setArray(
      array.map((arr: any) => {
        return arr.id == 2
          ? {
              ...arr,
              ans: true,
            }
          : arr;
      })
    );
  };

  console.log(current);
  console.log("input", lang);
  useEffect(() => {
    arrayCall();
  }, []);
  function arrayCall() {
    let newarray = [];
    for (let i = 1; i < 6; i++) {
      newarray.push({
        id: i,
        ans: false,
      });
    }
    setArray(newarray);
  }
  console.log(array);
  function handleBack() {
    if (current > 1) {
      setCurrent(current - 1);
    }
  }
  function handleNext() {
    if (current < 6) {
      setCurrent(current + 1);
    }
    if (current > 2) {
      setTemp(null);
    }
  }

  function handleFinish() {
    navigation.navigate("Results");
  }

  const image = {
    uri: "https://i.pinimg.com/originals/4f/ce/0b/4fce0bbaba37c3f1d4ce292cf6ecf221.jpg",
  };

  const NUM_ITEMS = 4;
  function getColor(i: number) {
    const multiplier = 255 / (NUM_ITEMS - 1);
    const colorVal = i * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
  }
  type Item = {
    key: string;
    label: string;
    height: number;
    width: number;
    backgroundColor: string;
  };
  const opt = [{ n: "Cat" }, { n: "Dog" }, { n: "Lion" }, { n: "Cow" }];
  const ans = [{ n: "roars" }, { n: "mews" }, { n: "barks" }, { n: "moos" }];
  const initialData: Item[] = opt.map((d, index) => {
    const backgroundColor = getColor(index);

    console.log(opt.map((item) => item.n));
    return {
      key: `item-${index}`,
      label: d.n,
      height: 50,
      width: 40 + Math.random() * 40,
      backgroundColor,
    };
  });

  const handle4 = () => {
    useEffect(() => {
      setCrct(crct + 1);
      setCount(count + 1);
      setArray(
        array.map((arr: any) => {
          return arr.id == 4
            ? {
                ...arr,
                ans: true,
              }
            : arr;
        })
      );
    }, [1]);
  };

  const [data, setData] = useState(initialData);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    handle4();
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "red" : item.backgroundColor },
          ]}
        >
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={array}
            numColumns={5}
            renderItem={({ item }) => {
              return (
                <View style={styles.navigate}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: item.ans == true ? "red" : "grey",
                      alignSelf: "center",
                      marginLeft: 70,
                      width: current == item.id ? 50 : 40,
                      height: current == item.id ? 50 : 40,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: current == item.id ? 30 : 20,
                    }}
                    onPress={() => {
                      setCurrent(item.id);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 19,
                        fontWeight: "500",
                      }}
                    >
                      {item.id}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {lang == "react" ? (
          <>
            {Content.reactQ.map((item, i) => {
              return (
                <View>
                  {current == item.id && (
                    <View style={styles.box} key={item.id}>
                      <Text style={styles.contentText}>
                        {item.id}. <Text>{item.q}</Text>
                      </Text>
                      {current != 4 && current != 2 && (
                        <>
                          {Content.reactQ[i].o.map((ele, index) => {
                            return (
                              <>
                                {current == 3 ? (
                                  <View style={{ flexDirection: "row" }}>
                                    <CheckBox
                                      checkedIcon="dot-circle-o"
                                      checked={index == 0 ? checked4 : checked5}
                                    />

                                    <TouchableOpacity
                                      style={
                                        temp == index
                                          ? styles.optionSelected
                                          : styles.options
                                      }
                                      key={index}
                                      onPress={() => {
                                        {
                                          index == 0
                                            ? setChecked4(!checked4)
                                            : setChecked5(!checked5);
                                        }

                                        setCount(count + 1);
                                        {
                                          ele == item.a && setCrct(crct + 1);
                                        }
                                        console.log(ele), console.log(item.a);
                                        setArray(
                                          array.map((arr: any) => {
                                            return arr.id == item.id
                                              ? {
                                                  ...arr,
                                                  ans: true,
                                                }
                                              : arr;
                                          })
                                        );
                                      }}
                                    >
                                      <Text style={styles.contentOptions}>
                                        {ele}
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                ) : (
                                  <TouchableOpacity
                                    style={
                                      temp == index
                                        ? styles.optionSelected
                                        : styles.options
                                    }
                                    key={index}
                                    onPress={() => {
                                      {
                                        current == 4 && setTemp("");
                                      }
                                      {
                                        current == 1 && setTemp(index);
                                      }
                                      {
                                        current == 5 && setTemp(index);
                                      }
                                      setCount(count + 1);
                                      {
                                        ele == item.a && setCrct(crct + 1);
                                      }
                                      console.log(ele), console.log(item.a);
                                      setArray(
                                        array.map((arr: any) => {
                                          return arr.id == item.id
                                            ? {
                                                ...arr,
                                                ans: true,
                                              }
                                            : arr;
                                        })
                                      );
                                    }}
                                  >
                                    <Text style={styles.contentOptions}>
                                      {ele}
                                    </Text>
                                  </TouchableOpacity>
                                )}
                              </>
                            );
                          })}
                        </>
                      )}
                      {current == 4 && (
                        <>
                          <View
                            style={{ flexDirection: "row" }}
                            // key={ele.toString()}
                          >
                            <View
                              style={{
                                display: "flex",
                              }}
                            >
                              <NestableScrollContainer>
                                <NestableDraggableFlatList
                                  data={data}
                                  renderItem={renderItem}
                                  keyExtractor={(item) => item.key}
                                  onDragEnd={({ data }) => setData(data)}
                                />
                              </NestableScrollContainer>
                              {ans.map((item) => {
                                return (
                                  <View style={{ flexDirection: "row" }}>
                                    <View
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",

                                        margin: 2,
                                        bottom: 215,
                                        left: 150,
                                      }}
                                    >
                                      <Text style={styles.text}>&larr;</Text>
                                    </View>
                                    <View
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",

                                        margin: 2,
                                        bottom: 215,
                                        left: 135,
                                      }}
                                    >
                                      <Text style={styles.text}>&rarr;</Text>
                                    </View>
                                    <View
                                      style={{
                                        direction: "ltr",
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: "white",
                                        margin: 2,
                                        bottom: 215,
                                        left: 140,
                                        width: 120,
                                        height: 50,
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Text style={styles.text}>{item.n}</Text>
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                        </>
                      )}
                      {current == 2 && (
                        <>
                          <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                              <CheckBox
                                checkedColor="orange"
                                checked={checked}
                                onPress={() => setChecked(!checked)}
                              />
                              <TouchableOpacity
                                style={styles.options2}
                                onPress={() => {
                                  setChecked(!checked), handle2();
                                }}
                              >
                                <Text style={styles.contentOptions}>a</Text>
                              </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <CheckBox
                                checkedColor="orange"
                                checked={checked1}
                                onPress={() => setChecked1(!checked1)}
                              />
                              <TouchableOpacity
                                style={styles.options2}
                                onPress={() => setChecked1(!checked1)}
                              >
                                <Text style={styles.contentOptions}>an</Text>
                              </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <CheckBox
                                checkedColor="orange"
                                checked={checked2}
                                onPress={() => setChecked2(!checked2)}
                              />
                              <TouchableOpacity
                                style={styles.options2}
                                onPress={() => {
                                  setChecked2(!checked2);
                                }}
                              >
                                <Text style={styles.contentOptions}>e</Text>
                              </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <CheckBox
                                checkedColor="orange"
                                checked={checked3}
                                onPress={() => setChecked3(!checked3)}
                              />
                              <TouchableOpacity
                                style={styles.options2}
                                onPress={() => setChecked3(!checked3)}
                              >
                                <Text style={styles.contentOptions}>k</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </>
                      )}
                      <Pressable
                        style={current > 1 ? styles.back : styles.back1}
                      >
                        <Text
                          style={{ fontSize: 18, fontWeight: "500" }}
                          onPress={handleBack}
                          disabled={current == 1}
                        >
                          Prev
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.next}
                        onPress={current == 5 ? handleFinish : handleNext}
                        key={i}
                      >
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>
                          {current == 5 ? "Finish" : "Next"}
                        </Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              );
            })}
          </>
        ) : (
          <>
            {Content.angularQ.map((item, i) => {
              return (
                <View>
                  {current == item.id && (
                    <View style={styles.box} key={item.id}>
                      <Text style={styles.contentText}>
                        {item.id}. <Text>{item.q}</Text>
                      </Text>

                      {Content.angularQ[i].o.map((ele, index) => {
                        return (
                          <TouchableOpacity
                            style={
                              array.ans == true
                                ? styles.optionSelected
                                : styles.options
                            }
                            key={index}
                            onPress={() => {
                              setCount(count + 1);
                              {
                                ele == item.a && setCrct(crct + 1);
                              }
                              console.log(ele), console.log(item.a);
                              setArray(
                                array.map((arr: any) => {
                                  return arr.id == item.id
                                    ? {
                                        ...arr,
                                        ans: true,
                                      }
                                    : arr;
                                })
                              );
                            }}
                          >
                            <Text style={styles.contentOptions}>{ele}</Text>
                          </TouchableOpacity>
                        );
                      })}
                      <Pressable
                        style={current > 1 ? styles.back : styles.back1}
                      >
                        <Text
                          style={{ fontSize: 18, fontWeight: "500" }}
                          onPress={handleBack}
                          disabled={current == 1}
                        >
                          Back
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.next}
                        onPress={current == 5 ? handleFinish : handleNext}
                        key={i}
                      >
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>
                          {current == 5 ? "Finish" : "Next"}
                        </Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              );
            })}
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default Quetions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },

  rowItem: {
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  navigate: {
    width: 50,
    alignItems: "center",
    margin: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  box: {
    width: 340,
    height: 390,
    backgroundColor: "#487eb0",
    alignSelf: "center",
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  contentText: {
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 20,
  },
  options: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    margin: 5,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
  },
  options2: {
    width: "50%",
    height: 40,
    backgroundColor: "white",
    margin: 5,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
  },
  optionSelected: {
    width: "80%",
    height: 40,
    backgroundColor: "grey",
    margin: 5,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
  },
  contentOptions: {
    fontSize: 20,
  },
  back: {
    width: 80,
    height: 35,
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  back1: {
    width: 80,
    height: 35,
    backgroundColor: "white",
    opacity: 0.5,

    position: "absolute",
    bottom: 10,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  next: {
    width: 80,
    height: 35,
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
});
