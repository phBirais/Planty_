import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
} from "react-native";

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import userImg from '../assets/profile.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }
        loadStorageUserName();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        //padding: 20,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    },
});