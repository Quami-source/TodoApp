import React from 'react';

import {MyContext} from './components/MyContext';
import HomeScreen from './screens/HomeScreen';
import CreateNote from './screens/CreateNote';
import Header from './components/Header';
import TodoArray from './Todos';
import HeaderRightIcon from './components/HeaderRightIcon';
import {compact} from 'lodash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const initialState = {
    isEmpty: true,
    isTyping: false,
  };
  //create reducer to handle expensive
  //state values\
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          isEmpty: false,
          isTyping: true,
        };

      case 'DELETE':
        return {
          isEmpty: false,
          isTyping: false,
        };
    }
  };

  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  //create memo to calculate the state actions
  const todoContext = React.useMemo(
    () => ({
      addTodo: () => {
        dispatch({type: 'ADD'});
      },
      deleteTodo: () => {
        dispatch({type: 'DELETE'});
      },
    }),
    [],
  );

  //const {addTodo} = React.useContext(MyContext)

  // use the useEffect hook to get the size of the
  //array, if the size is zero, display splashscreen
  //else display the content of the array
  React.useEffect(() => {}, []);

  return (
    <MyContext.Provider value={todoContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen" initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => {
                return <Header />;
              },
            }}
          />
          <Stack.Screen name="Add" component={CreateNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default App;
