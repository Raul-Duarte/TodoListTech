import React from 'react';
import { ScrollView } from 'react-native';


import EntryList from '../../components/Entry/EntryList'

const Main = () => {
  return (
    <ScrollView>
      <EntryList/>
    </ScrollView>
  )
}

export default Main;