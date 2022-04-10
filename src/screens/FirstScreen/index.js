import React from 'react'
import {
    View, 
    Text, 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'

export function FirstScreen() {
    return (
        <LinearGradient 
            style={styles.container}
            colors={['#1982C6', '#55D9C8']}
            start={{x:0.25,y:0.85}}
	        end={{x:1,y:0.40}}
        >
            <Text style={styles.title}>
                Falar com um profissional
            </Text>
            <View style={styles.content}>

                <Text style={styles.subtitle}>
                </Text>

            </View>
        </LinearGradient>
    )
}
