import { FlatList, StyleSheet, View } from "react-native";
import GoalComponent from "./GoalComponent.jsx";

const ListGoalComponent = (props) => {
  const { listGoal, onRemoveGoalFromList } = props;

  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={listGoal}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={(itemData) => (
          <GoalComponent
            goal={itemData.item}
            onRemoveGoalFromList={onRemoveGoalFromList}
          />
        )}
      />
    </View>
  );
};

export default ListGoalComponent;

const styles = StyleSheet.create({
  goalContainer: {
    flex: 5,
  },
});
