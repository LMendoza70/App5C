import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View>
      <Text>about</Text>
      <Link href={"./index"}>
        go back...
      </Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({})