import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

/**
 * Criando tipagem para que o gradient possa envolver todos os componentes da tela que forem passados
 */
type Props = {
    children: ReactNode
}

export function Background({ children }: Props) {

    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    );
}