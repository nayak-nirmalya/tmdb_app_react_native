import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type NavbarProps = {
  main?: boolean;
};

const Navbar = React.memo(({ main = false }: NavbarProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {main ? (
        <View>
          <Image source={require('')} />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
});

export default Navbar;

const styles = StyleSheet.create({});
