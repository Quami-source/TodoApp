import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderRightIcon = (...props) => {
  console.log(props);

  return (
    <View style={{marginRight: 20}}>
      <TouchableOpacity>
        <Icon name="check" size={30} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightIcon;
