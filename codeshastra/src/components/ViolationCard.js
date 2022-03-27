import React from 'react';
import {View, Image} from 'react-native';
import {Card, Subheading} from 'react-native-paper';

const ViolationCard = ({item}) => {
  return (
    <Card style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Subheading>{item.type}</Subheading>
        {item.image ? (
          <Image source={{uri: item.image}} style={{height: 100, width: 100}} />
        ) : (
          <Subheading>
            {item.type === 'Incomplete Hours'
              ? item.hours -
                new Date(item.outTime - item.arrival).getHours() +
                ' incomplete hours'
              : new Date(item.arrival - item.reporting).getMinutes() +
                ' minutes late'}
          </Subheading>
        )}
      </View>
    </Card>
  );
};

export default ViolationCard;
