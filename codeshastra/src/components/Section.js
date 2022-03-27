import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Subheading, useTheme} from 'react-native-paper';

const Section = ({Icon, label, onPress, showArrow}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 2,
        borderBottomColor: colors.textBefore,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'center',
      }}
      onPress={onPress ? onPress : () => {}}>
      <View style={{flexDirection: 'row'}}>
        <Icon />
        <Subheading style={{marginLeft: 15}}>{label}</Subheading>
      </View>
      {showArrow ? (
        <AntDesign name="right" color={colors.text} size={16} />
      ) : null}
    </TouchableOpacity>
  );
};

export default Section;
