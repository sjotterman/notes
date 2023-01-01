import { Button, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { decrement, increment } from "../features/counter/counterSlice";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  // currently unused
  navigation: _navigation,
}: RootTabScreenProps<"TabOne">) {
  const count = useAppSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text> Counter:</Text>
      <Text>{count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
