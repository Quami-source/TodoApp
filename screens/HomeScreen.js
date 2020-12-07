import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
//import {MyContext} from '../components/MyContext';
import Icon from 'react-native-vector-icons/Ionicons';
import TodoArray from '../Todos';
//import {AntDesign} from 'react-native-vector-icons'
const height = Dimensions.get('screen').height;
const width = Dimensions.get('window').width;

const HomeScreen = ({route, navigation}, props) => {
  //const {title, body} = route.params;
  //const [notes, setNotes] = useState([{title: title, body: body}]);
  //context
  //console.log(TodoArray.length);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        {TodoArray.length == 0 ? (
          <View style={styles.imageContainer}>
            <Image
              source={require('../src/notetaking.gif')}
              resizeMode="cover"
            />
          </View>
        ) : (
          <View>
            {TodoArray.map((todos) => {
              return (
                <View key={todos.id}>
                  <Text>{todos.title}</Text>
                  <Text>{todos.body}</Text>
                </View>
              );
            })}
          </View>
        )}
        <View
          style={{
            flex: 1,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add')}
            style={{
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
              height: 80,
              borderRadius: 40,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 2,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <Icon name="add" color="#fff" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#fff',
    height: height,
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
