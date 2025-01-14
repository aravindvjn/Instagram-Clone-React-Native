import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import CustomText from '../../UI/Typography/CustomText'
import Center from '../../UI/Wrappers/Center'

const NoPosts = () => {
  return (
    <Center>
     <Ionicons name='camera' size={30} color={'white'} />
     <CustomText>No Posts Yet</CustomText>
    </Center>
  )
}

export default NoPosts

const styles = StyleSheet.create({})