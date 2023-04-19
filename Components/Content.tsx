import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const reactQ = [
  {
    id: 1,
    q: "How many alphabets are there in English language?",
    a: "26",
    o: ["28", "52", "26", "25"],
  },
  {
    id: 2,
    q: "Which are the vowels in the given options",
    a: "a",
    o: ["a", "an", "e", "k"],
  },
  {
    id: 3,
    q: "English is the national Language of United Kingdom ",
    a: "true",
    o: ["true", "false"],
  },
  {
    id: 4,
    q: "Match the following",
    a: "npm start",
    o: ["npm start", "npm build", "npm serve", "npm run dev"],
  },
  {
    id: 5,
    q: `Identify the noun in the following sentences: ${"\n"} ${"\n"}I live in Amsterdam`,
    a: "Amsterdam",
    o: ["I", "live", "in", "Amsterdam"],
  },
];

const angularQ = [
  {
    id: 1,
    q: "How many alphabets are there in Hindi language?",
    a: "js framework",
    o: ["java framework", "HTML framework", "js framework", "SQL framework"],
  },
  {
    id: 2,
    q: "Choose the correct syntax for writing AngularJS expression",
    a: "{{expressions}}",
    o: ["{{expressions}}", "[expressions]", "{expressions}", "[[expresions]]"],
  },
  {
    id: 3,
    q: "Hindi is not the National Language of India",
    a: "true",
    o: ["true", "false"],
  },
  {
    id: 4,
    q: "Who is the father of AngularJS? ",
    a: "Mike Adams",
    o: ["Misko Hevery", "Mike Adams", "Brad Green", "Adam e bronze"],
  },
  {
    id: 5,
    q: "Choose the incorrect AngularJS filter",
    a: "email",
    o: ["orderby", "email", "lowercase", "currency"],
  },
];
export default { reactQ, angularQ };
