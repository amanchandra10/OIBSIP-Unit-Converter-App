/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromUnit, setSelectedFromUnit] = useState('inches');
  const [selectedToUnit, setSelectedToUnit] = useState('centimeters');
  const [convertedValue, setConvertedValue] = useState('');

  const conversionFactors = {
    inches: {
      centimeters: 2.54,
      feet: 1 / 12,
      meters: 0.0254,
    },
    centimeters: {
      inches: 1 / 2.54,
      feet: 1 / 30.48,
      meters: 0.01,
    },
    feet: {
      inches: 12,
      centimeters: 30.48,
      meters: 0.3048,
    },
    meters: {
      inches: 39.3701,
      centimeters: 100,
      feet: 3.28084,
    },
  };

  const handleConversion = () => {
    const factor = conversionFactors[selectedFromUnit][selectedToUnit];
    const converted = parseFloat(inputValue) * factor;
    setConvertedValue(converted.toFixed(2));
  };

  return (
    <>
    <Text style={{marginVertical:20,fontWeight:800}}>Unit Converter</Text>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          width: 200,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          textAlign: 'center',
          borderRadius:20,

        }}
        placeholder="Enter value"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <Picker
        selectedValue={selectedFromUnit}
        style={{height: 50, width: 150,fontWeight:800}}
        onValueChange={itemValue => setSelectedFromUnit(itemValue)}>
        <Picker.Item label="Inches" value="inches" />
        <Picker.Item label="Centimeters" value="centimeters" />
        <Picker.Item label="Feet" value="feet" />
        <Picker.Item label="Meters" value="meters" />
      </Picker>
      <Picker
        selectedValue={selectedToUnit}
        style={{height: 50, width: 150}}
        onValueChange={itemValue => setSelectedToUnit(itemValue)}>
        <Picker.Item label="Inches" value="inches" />
        <Picker.Item label="Centimeters" value="centimeters" />
        <Picker.Item label="Feet" value="feet" />
        <Picker.Item label="Meters" value="meters" />
      </Picker>
      <Button style={{backgroundColor: 'orange'}} title="Convert" onPress={handleConversion} />
      <Text style={{marginTop: 20,color:'green'}}>Converted Value: {convertedValue}</Text>
    </View>
    </>
  );
};

export default UnitConverter;
