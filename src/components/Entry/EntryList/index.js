import React from 'react';
import { Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const EntryList = () => {
  const list = [
    {
      title: 'Fazer compras',
    },
    {
      title: 'COLOCAR gAZOZA',
    },
  ]
  return (
    <View>
      {
        list.map((item,i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
              raised
              name='check'
              type='font-awesome'
              color='#00ff37'
              onPress={() => console.log(item.title)} />
            <Icon
              raised
              name='edit'
              type='font-awesome'
              color='#f50'
              onPress={() => console.log('hello')} />
          </ListItem>
        ))
      }
    </View>
  )
}

export default EntryList;