import { StyleSheet, Text, View } from 'react-native';
import {TextInput, Button} from "react-native-web";
import React from "react";

export default class App extends React.Component {
  state = {
    text: '',
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.InputContainer}>
            {/* Input */}
            <TextInput placeholder={"scrivi todo"} style={styles.Input}/>
            <Button
                title={"Invio"}
                onPress={() => {}}
            />
          </View>
          <View>
            {/* Output */}
            <Text>

            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
    Input: {
      width: '80%',
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      paddingLeft: 3
    },
  InputContainer: {
    marginTop: 50,
    padding: 50,
    flexDirection: "row",
    alignItems: "center"
  }
});
