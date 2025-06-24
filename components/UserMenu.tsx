import React from "react"
import { StyleSheet, View } from "react-native"

interface IUserMenu {
    children : React.ReactNode
}

const UserMenu = ({children}: IUserMenu) => {
    return (
        <View style={Styles.userCartao}>
            {children}
        </View>
    )
}

const Styles = StyleSheet.create({
    userCartao :{
        width: '30%',
        backgroundColor: '#dbafd0',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
        alignItems: 'center',
    }
})

export default UserMenu;