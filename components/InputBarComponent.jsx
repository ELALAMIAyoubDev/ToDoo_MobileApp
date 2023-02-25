import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import goalLogo from "../assets/goal.png";

const InputBarComponent = (props) => {
  const { onAddGoalToList } = props;
  const [goal, setGoal] = useState("");
  const [modalAddGoalIsVisible, SetModalAddGoalIsVisible] = useState(false);

  const changeHandler = (text) => {
    setGoal(text);
  };

  const addToListGoalHandler = () => {
    if (goal.trim() !== "") {
      onAddGoalToList(goal);
      setGoal("");
      showModalAddGoalHandler();
    }
  };
  const showModalAddGoalHandler = () =>
    SetModalAddGoalIsVisible(!modalAddGoalIsVisible);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.openModalButton}>
        <Button
          title="Add Goal"
          onPress={showModalAddGoalHandler}
          color="#5e0ecc"
        />
      </View>
      <Modal visible={modalAddGoalIsVisible} animationType="fade">
        <View style={styles.inputContainer}>
          <Image style={styles.img} source={goalLogo} />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            value={goal}
            onChangeText={changeHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addToListGoalHandler}
                color="#5e0acc"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={showModalAddGoalHandler}
                color="#f31282"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default InputBarComponent;

const styles = StyleSheet.create({
  openModalButton: {
    paddingBottom: 10,
    marginBottom: 24,
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#120438",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#826cbd",
    borderRadius: 5,
    width: "90%",
    backgroundColor: "#826cbd",

    color: "#000",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  button: {
    margin: 10,
    width: "30%",
  },
});
