import React, { useRef } from 'react';
import ViewPager from '@react-native-community/viewpager';
import { View, ScrollView } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import UserActions from '~/redux/UserRedux';

import Layout from '~/components/Layout';

import UserPage from './UserPage';
import PageIndicator from './PageIndicator';
import CreateUserFab from './CreateUserFab';
import UserDetailsSheet from '~/screens/UserDetailsSheet';

import styles from './UserListScreenStyle';

export default function UserListScreen() {
    const dispatch = useDispatch();
    const userDetailsSheetRef = useRef(null);

    const currentPage = useSelector(state => state.user.currentPage);
    const totalPages = useSelector(state => state.user.totalPages);

    const handleShowUser = ({ user }) => {
        userDetailsSheetRef?.current?.open({ user });
    }

    const handleCreateUser = () => {
        userDetailsSheetRef?.current?.open({ user: { id: null } });
    }

    const handlePageSelect = ({ nativeEvent }) => {
        const { position } = nativeEvent;
        dispatch(UserActions.setPage({ currentPage: position }));
    }


    const renderPages = () => {
        const pagesList = [...Array(totalPages).keys()];

        // Дополнительный View - workaround для ViewPager
        return pagesList.map((page) => (
            <View key={`page-${page}`}>
                <UserPage
                    page={page}
                    onShowUser={handleShowUser}
                />
            </View>
        ));
    }

    return (
        <>
            <Layout>
                <ViewPager
                    style={styles.userListContainer}
                    initialPage={0}
                    onPageSelected={handlePageSelect}
                >
                    {renderPages()}
                </ViewPager>
                <PageIndicator totalPages={totalPages} currentPage={currentPage} />
                <CreateUserFab onPress={handleCreateUser} />
            </Layout>
            <UserDetailsSheet
                ref={userDetailsSheetRef}
            />
        </>

    );
}


