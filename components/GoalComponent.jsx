import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ModalComponent from "./ModalComponent.jsx";

const GoalComponent = (props) => {
  const { goal, onRemoveGoalFromList } = props;
  const [modalRemoveGoalIsVisible, setModalRemoveGoalIsVisible] =
    useState(false);

  const showModalRemoveGoalHandler = () =>
    setModalRemoveGoalIsVisible(!modalRemoveGoalIsVisible);

  return (
    <View style={styles.textContainer}>
      <Pressable
        onPress={showModalRemoveGoalHandler}
        style={({ pressed }) => pressed && styles.pressed}>
        <Text style={styles.text}>{goal.name}</Text>
      </Pressable>

      <ModalComponent
        modalRemoveGoalIsVisible={modalRemoveGoalIsVisible}
        onRemoveGoalFromList={onRemoveGoalFromList}
        showModalRemoveGoalHandler={showModalRemoveGoalHandler}
        goal={goal}
      />
    </View>
  );
};

export default GoalComponent;

const styles = StyleSheet.create({
  textContainer: {
    margin: 4,
    backgroundColor: "#5e0ecc",
    borderWidth: 1,
    borderColor: "#5e0ecc",
    borderRadius: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 4,
  },
  pressed: {
    backgroundColor: "#250452",
    borderWidth: 1,
    borderColor: "#250452",
    borderRadius: 50,
  },
});
