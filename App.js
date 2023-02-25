import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListGoalComponent, InputBarComponent } from "./components";

const App = () => {
  const [listGoal, setListGoal] = useState([]);

  const onAddGoalToList = (newGoal) =>
    setListGoal((prevVal) => [
      { id: Math.random(), name: newGoal },
      ...prevVal,
    ]);

  const onRemoveGoalFromList = (idGoal) => {
    setListGoal((prevVal) => prevVal.filter((goal) => goal.id !== idGoal));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlestart}>ToDo Goals</Text>
      <InputBarComponent onAddGoalToList={onAddGoalToList} />
      <ListGoalComponent
        listGoal={listGoal}
        onRemoveGoalFromList={onRemoveGoalFromList}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titlestart: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
    color: "#5e0acc",
    // fontFamily: "Bigelow Rules",
  },
});
