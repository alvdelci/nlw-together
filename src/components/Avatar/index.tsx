import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string
}

export function Profile({ urlImage }: Props) {

    const { secondary80, secondary100 } = theme.colors;

    return (
        <View>
            <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
        </View>
    );
}