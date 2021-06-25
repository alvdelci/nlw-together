import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar/index';
import { styles } from './styles';

export function Profile() {

    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/alvdelci.png" />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Rafithy
                    </Text>
                </View>

                <Text style={styles.message}>
                    Chama no brelele
                </Text>
            </View>
        </View>
    );
}