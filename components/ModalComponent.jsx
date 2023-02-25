import { Button, Text, Modal, StyleSheet, View } from "react-native";

const ModalComponent = (props) => {
  const {
    modalRemoveGoalIsVisible,
    onRemoveGoalFromList,
    showModalRemoveGoalHandler,
    goal,
  } = props;

  const removeGoalFromListHndler = () => onRemoveGoalFromList(goal.id);

  return (
    <Modal visible={modalRemoveGoalIsVisible} animationType="fade">
      <View style={styles.container}>
        <View>
          <Text style={styles.textN}>
            Are you sure want remove "{goal.name}" goal ?
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Yes"
              color="#5e0acc"
              onPress={removeGoalFromListHndler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="No"
              color="#f31282"
              onPress={showModalRemoveGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#120438",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textN: {
    fontSize: 20,
    color: "#fff",
  },
  button: {
    margin: 10,
    width: "30%",
  },
});
