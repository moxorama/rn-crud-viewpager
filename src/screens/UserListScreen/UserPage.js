import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector } from "react-redux";

import UserListItem from './UserListItem';

const { width, height } = Dimensions.get('window');

export default function UserPage({ page, onShowUser }) {
    const fetching = useSelector(state => state.user.fetching);
    const content = useSelector(state => state.user.content);

    const users = content?.[page] ?? [];

    const renderUsers = () => {
        return users.map((user) => (
            <UserListItem 
                user={user} 
                key={`user-${user?.id}`}
                onPress={onShowUser}
            />));
    }

    return (
        <View style={{ width, height: height - 100 }}>
            {renderUsers()}
        </View>
    );
}