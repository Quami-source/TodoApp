import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from 'react-native';
import {MyContext} from '../components/MyContext';
import TodoArray from '../Todos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {set} from 'lodash';
import DatePicker from 'react-native-date-picker';

const {width, height} = Dimensions.get('window');
var isTypingGlobal = false;

const CreateNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const {addTodo} = React.useContext(MyContext);

  return (
    <View style={styles.notesContainer}>
      <Text style={{fontSize: 30, fontWeight: '600', paddingTop: 40}}>
        Add Note below
      </Text>
      <TextInput
        style={{fontWeight: '600', fontSize: 30, marginTop: 10}}
        placeholder="Tile"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{fontSize: 19, marginTop: 10, marginBottom: 20}}
        placeholder="Add some notes here"
        value={body}
        multiline
        onChangeText={setBody}
        onFocus={(e) => {
          setIsTyping(true);
          //console.log('key changed' + addTodo);
          isTypingGlobal = true;
          addTodo();
        }}
      />
      <Button
        title="ADD NOTE"
        disabled={!isTyping}
        onPress={() => {
          // Alert.alert('Add', 'No<ReminderDate />ted added successfully', [
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

//Bottom screens

//Album modal
const Albums = () => {
  const [isVisible, setVisibility] = React.useState(false);

  return (
    <View style={styles.bottomBtn}>
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        onBackButtonPress={() => {
          setVisibility(!isVisible);
        }}
        onBackdropPress={() => setVisibility(!isVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={{color: '#aaa'}}>Albums</Text>
            <TouchableOpacity
              onPress={() => console.log('Take a damn picture')}>
              <Text style={{fontSize: 16}}>Take a picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('Take a damn picture')}>
              <Text style={{fontSize: 16}}>Choose a picture from albums</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.bottomBtnChild}
        onPress={() => {
          setVisibility(true);
          //Alert.alert('title', 'message');
        }}>
        <Icon name="add-photo-alternate" size={25} />
        <Text>Albums</Text>
      </TouchableOpacity>
    </View>
  );
};

//Todo list bulleting
const TodoBullets = () => {
  return (
    <View style={styles.bottomBtnChild}>
      <Icon name="list-alt" size={25} />
      <Text>To-do list</Text>
    </View>
  );
};

//Date modal
const ReminderDate = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <TouchableOpacity
      style={styles.bottomBtnChild}
      onPress={() => {
        //console.log('On Press reached');
        return (
          <DatePicker date={date} onDateChange={setDate} mode="datetime" />
        );
      }}>
      <Icon name="notifications" size={25} />
      <Text>Reminder</Text>
    </TouchableOpacity>
  );
};

const CreateStack = () => {
  return (
    <View style={styles.container}>
      <CreateNote />
      <View style={styles.bottomBtn}>
        <Albums />
        <TodoBullets />
        <ReminderDate />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,

    backgroundColor: '#fff',
  },
  notesContainer: {
    flex: 8,

    padding: 20,
  },
  bottomBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f4f4f4',
  },
  bottomBtnChild: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
});

export {CreateStack};
