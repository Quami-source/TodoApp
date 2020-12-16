import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import {MyContext} from '../components/MyContext';
import TodoArray from '../Todos';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderRightIcon = (...props) => {
  //console.log(props);

  return (
    <View style={{marginRight: 20}}>
      <TouchableOpacity>
        <Icon name="check" size={30} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const CreateNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // React.useEffect =
  //   (() => {
  //     if (body != null) {
  //       var todo = {title, body};
  //       TodoArray.push(todo);
  //       console.log('todo added');
  //     } else {
  //       Alert.alert('Empty todo', 'Todo cannot be empty');
  //       console.log(todo);
  //     }
  //   },
  //   []);

  const {addTodo} = React.useContext(MyContext);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: '600'}}>Add Note below</Text>
      <TextInput
        style={{fontWeight: '600', fontSize: 30, marginTop: 10}}
        placeholder="Tile"
        value={title}
        onChangeText={setTitle}
        onFocus={(e) => {
          setIsTyping(false);
          //addTodo();
        }}
      />
      <TextInput
        style={{fontSize: 19, marginTop: 10, marginBottom: 20}}
        placeholder="Add some notes here"
        value={body}
        multiline
        onChangeText={setBody}
        onFocus={(e) => {
          setIsTyping(false);
          //console.log('key changed' + addTodo);

          addTodo();
        }}
      />
      <Button
        title="ADD NOTE"
        disabled={isTyping}
        onPress={() => {
          // Alert.alert('Add', 'Noted added successfully', [
          //   {text: 'OK', onPress: () => navigation.navigate('Home')},
          // ]);
          let id = Math.random() * (100 - 1) + 1;
          TodoArray.unshift({id, title, body});
          //navigation.navigate('Home');
          //console.log();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export {CreateNote, HeaderRightIcon};
