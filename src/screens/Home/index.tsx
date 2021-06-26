import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile/index';
import { ButtonAdd } from '../../components/BottonAdd';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 22:00h',
            description: 'É hoje que nego não dorme. Chama!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 22:00h',
            description: 'É hoje que nego não dorme. Chama!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </Background>
    );
}