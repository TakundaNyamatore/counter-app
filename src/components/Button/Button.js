import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./button.style";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
