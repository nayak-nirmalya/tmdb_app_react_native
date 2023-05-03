import { Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../themes/Colors';

type NavbarProps = {
  main?: boolean;
};

const Navbar = React.memo(({ main = false }: NavbarProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {main ? (
        <View className="flex-1 justify-between flex-row p-2 items-center align-middle">
          <Image
            className="w-8 h-6"
            source={require('../assets/images/tmdb_logo.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={40} color={Colors.ligthGray} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
});

export default Navbar;
