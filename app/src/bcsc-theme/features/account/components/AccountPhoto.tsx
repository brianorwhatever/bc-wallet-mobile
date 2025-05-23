import { useTheme } from '@bifold/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Placholder for now
const AccountPhoto: React.FC = () => {
  const { Spacing, ColorPallet } = useTheme()

  const styles = StyleSheet.create({
    container: {
      width: 130,
      height: 180,
      backgroundColor: ColorPallet.grayscale.lightGrey,
      marginBottom: Spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    photo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  })

  return <View style={styles.container}>{/* <Image source={{ uri: photoUri }} style={styles.photo} /> */}</View>
}

export default AccountPhoto
