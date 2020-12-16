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
        <View style={{flex: 2}}>
          {TodoArray.length == 0 ? (
            <View style={styles.imageContainer}>
              <Image
                source={require('../src/notetaking.gif')}
                resizeMode="cover"
              />
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.searchBar}>
                <Icon
                  name="search"
                  color="#ccc"
                  size={25}
                  style={{paddingLeft: 10}}
                />
                <Text style={{color: '#ccc', paddingLeft: 10, fontSize: 20}}>
                  Search notes
                </Text>
              </View>

              {TodoArray.map((todos, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 10,
                      marginBottom: 15,
                    }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 20,
                        paddingTop: 10,
                        paddingLeft: 10,
                      }}>
                      {todos.title}
                    </Text>
                    <Text style={{paddingLeft: 10, paddingBottom: 5}}>
                      {todos.body}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View
          style={{
            flex: 1,
            position: 'relative',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add')}
            style={{
              backgroundColor: '#0645FF',
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
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
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
