import axios from 'axios';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Botao from '@/components/Button';
import UserMenu from '@/components/UserMenu';

interface IUsers {
  name: string,
  email: string,
  id: string,
  avatar: string,
}

export default function HomeScreen() {
  const [Users, setUsers] = React.useState<IUsers[]>([])

  const GetUsers = async () => {
    const {data} = await axios.get("https://685b022689952852c2d85a5e.mockapi.io/User")
    setUsers(data)
    console.log(data)
  }


  const ListUsers = () => {
    return Users.map(User => {
      return(
        <UserMenu>
          <Image source={{uri: User.avatar}} style={{ width: 100, height: 100, borderRadius: 10, marginBottom: 10}} />
          <Text>ID: {User.id},</Text>
          <Text>Email: {User.email},</Text>
          <Text style={{marginBottom: 10}}>Nome: {User.name},</Text>
          <Botao/>
        </UserMenu>
      )
    })
  }

  React.useEffect(() => {
    GetUsers()
  }, [])

  return (
    <ScrollView style={{backgroundColor: '#391f59'}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10}}>
        {ListUsers()}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
