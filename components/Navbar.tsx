import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = React.memo(() => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Icon name="chevron-back" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default Navbar;

const styles = StyleSheet.create({});
