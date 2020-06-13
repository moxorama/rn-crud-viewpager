import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from "react-redux";

import UserListItem from './UserListItem';

import styles from './UserListScreenStyle';

export default function UserPage({ page, onShowUser }) {
    const content = useSelector(state => state.user.content);

    const users = content?.[page] ?? [];

    const renderUsers = () => {
        return users.map((user) => (
            <UserListItem 
                user={user} 
                key={`user-${user?.id}`}
                onPress={onShowUser}
            />)
        );
    }


    return (
        <View style={styles.userPage} key={`page-${page}`}>
            {renderUsers()}
        </View>
    );
}