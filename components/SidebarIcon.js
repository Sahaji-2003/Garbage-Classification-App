import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SidebarIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 20, marginTop: 10 }}> 
      <Ionicons name="menu-outline" size={24} color="black" /> 
    </TouchableOpacity>
  );
}

export default SidebarIcon;
