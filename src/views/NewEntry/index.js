import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';

const NewEntry = () => {
  const [entry, setEntry] = useState('');

  const save = () => {
    const value = {
      entry,
    };
    console.log('NewEntry :: save ', value);
    // saveEntry(value);
  };
  return (
    <View style={styles.container}>
      <View>
        <Input
          style={styles.input}
          onChangeText={text => setEntry(text)}
          value={entry}
        />
      </View>
      <View>
        <Button title="Adicionar" onPress={save} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    // borderWidth: 1,
  },
});

export default NewEntry;