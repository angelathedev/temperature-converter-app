import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const TempType = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Celsius to Fahrenheit", value: "fahrenheit" },
    { label: "Fahrenheit to Celsius", value: "celsius" },
  ]);
  const [degrees, setDegrees] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (degrees) => {
    if(degrees.trim !== ''){
        setButtonDisabled(false);
    }
    setDegrees(degrees);
  }

  const handleConversion = () => {
    if (value === "celsius") {
      setDegrees(((degrees - 32) * (5 / 9)).toFixed(2));
      setResult(`${degrees}°F`)
    } else if (value === "fahrenheit") {
      setDegrees((degrees * (9 / 5) + 32).toFixed(2));
      setResult(`${degrees}°C`)
    }
    setButtonDisabled(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sub_container}>
        <Text style={styles.label}>Type</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select a temperature type"
          dropDownDirection="TOP"
        />
      </View>
      <View style={styles.sub_container}>
        <Text style={styles.label}>Degrees</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter degrees"
          onChangeText={handleInputChange}
          keyboardType="numeric"
          clearTextOnFocus={true}
          returnKeyType="done"
        />
      </View>

      <View style={styles.sub_container}>
        <TouchableHighlight
          style={buttonDisabled ? styles.button_disabled : styles.button}
          onPress={handleConversion}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          disabled={buttonDisabled}
        >
          <Text style={styles.button_label}>Convert</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.sub_container}>
        <Text style={styles.label}>Result</Text>
        {!buttonDisabled ? <Text>{''}</Text> : <Text style={styles.result_text}>{(value === 'celsius') ? degrees + " °C" : degrees + " °F"}</Text>}
        
      </View>
    </SafeAreaView>
  );
};

export default TempType;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "80%",
  },
  sub_container: {
    marginBottom: 50,
  },
  label: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 20,
    fontSize: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "lightblue",
  },
  button_disabled: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "lightgray",
  },
  button_label: {
    fontSize: 30,
    textAlign: "center",
  },
  result_text: {
    fontSize: 50,
    textAlign: "center",
  },
});
