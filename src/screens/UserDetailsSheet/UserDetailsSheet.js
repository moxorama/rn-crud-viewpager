import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from "react-redux";

import UserActions from '~/redux/UserRedux';
import Button from '~/components/Button';
import styles from './UserDetailsSheetStyle';

const UserDetailsSheet = forwardRef(({ }, ref) => {
    const bottomSheetRef = useRef(null);

    const fetching = useSelector(state => state.user.fetching);
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);

    useImperativeHandle(ref, () => ({
        open: ({ user }) => {
            setUser(user);
            bottomSheetRef?.current?.open();
        },

        close: () => {
            setUser(null);
            bottomSheetRef?.current?.close();
        },
    }));

    const isValidField = (field) => {
        return ((user?.[field] || '').length > 0)
    }

    const isNewUser = () => !user?.id


    const handleSaveUser = () => {
        // Можно написать более красивый валидатор
        if (
            (!isValidField('first_name'))  ||
            (!isValidField('last_name'))||
            (!isValidField('email')) 
        ) {
            Alert.alert(
                'Ошибка', 
                'Пожалуйста, заполните все поля', 
                [
                    { text: 'OK', onPress: () => {}}
                ]
            )

            return;
        }


        if (isNewUser()) {
            dispatch(UserActions.createRequest({ user }));
            bottomSheetRef?.current?.close();    
        } else {
            dispatch(UserActions.updateRequest({ user }));
            bottomSheetRef?.current?.close();    
        }
    }

    const handleDeleteUser = () => {
        dispatch(UserActions.deleteRequest({ userId: user?.id }));
        bottomSheetRef?.current?.close();
    }

    const handleFirstNameChange = ({ nativeEvent }) => {
        setUser({ ...user, ['first_name']: nativeEvent?.text });
    }

    const handleLastNameChange = ({ nativeEvent }) => {
        setUser({ ...user, ['last_name']: nativeEvent?.text });
    }

    const handleEmailChange = ({ nativeEvent }) => {
        setUser({ ...user, ['email']: nativeEvent?.text });
    }

  

    const renderHeader = () => {
        if (isNewUser()) {
            return null;
        }

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleDeleteUser} style={styles.deleteUserButton}>
                    <Ionicons name="md-trash" size={32} style={styles.destroyIcon} />
                </TouchableOpacity>
            </View>
        );
    }

    const renderFooter = () => {
        const buttonText = isNewUser() 
            ? 'Создать'
            : 'Сохранить';

        return (
            <View style={styles.footerContainer}>
                <Button
                    onPress={handleSaveUser}
                    text={buttonText}
                    disabled={fetching}
                />
            </View>
        )
    }

    if (user === null) {
        return null;
    }

    return (
        <Modalize
            ref={bottomSheetRef}
            adjustToContentHeight
            FooterComponent={renderFooter}
            HeaderComponent={renderHeader}
        >
            <View style={styles.userDetailsContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                </View>
                <TextInput
                    autoFocus
                    defaultValue={user?.first_name}
                    style={[styles.userDataInput]}
                    placeholder="Имя"
                    onChange={handleFirstNameChange}
                />
                <TextInput
                    defaultValue={user?.last_name}
                    style={[styles.userDataInput]}
                    placeholder="Фамилия"
                    onChange={handleLastNameChange}

                />
                <TextInput
                    defaultValue={user?.email}
                    style={[styles.userDataInput]}
                    onChange={handleEmailChange}
                    placeholder="Email"

                />

            </View>
        </Modalize>
    );
});

export default UserDetailsSheet;

