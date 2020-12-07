import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {MyContext} from '../components/MyContext';

const CreateNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const {addTodo} = React.useContext(MyContext);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: '600'}}>Add Note below</Text>
      <TextInput
        style={{fontWeight: '600', fontSize: 30}}
        placeholder="Tile"
        value={title}
        onChangeText={setTitle}
        onKeyPress={(e) => {
          setIsTyping(true);
          addTodo();
        }}
      />
      <TextInput
        style={{fontSize: 19}}
        placeholder="Add some notes here"
        value={body}
        multiline
        onChangeText={setBody}
        onKeyPress={(e) => {
          setIsTyping(true);
          addTodo();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default CreateNote;
