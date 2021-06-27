import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar/index';
import { styles } from './styles';

export function Profile() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>

            <Avatar urlImage={user.avatar} />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        { user.firstName }
                    </Text>
                </View>

                <Text style={styles.message}>
                    Chama no brelele
                </Text>
            </View>
        </View>
    );
}