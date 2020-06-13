import React, {  useRef } from 'react';
import ViewPager from '@react-native-community/viewpager';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from "react-redux";
import UserActions from '~/redux/UserRedux';

import Layout from '~/components/Layout';

import UserPage from './UserPage';
import PageIndicator from './PageIndicator';

import styles from './UserListScreenStyle';
import UserDetailsSheet from '~/screens/UserDetailsSheet';

export default function UserListScreen() {
    const dispatch = useDispatch();
    const userDetailsSheetRef = useRef(null);

    const currentPage = useSelector(state => state.user.currentPage);
    const totalPages = useSelector(state => state.user.totalPages);

    const showUser = ({ user }) => {
        userDetailsSheetRef?.current?.open({ user });
    }

    const handlePageSelect = ({ nativeEvent }) => {
        const { position } = nativeEvent;
        dispatch(UserActions.setPage({ currentPage: position }));
    }

    const renderPages = () => {
        const pagesList = [...Array(totalPages).keys()];

        return pagesList.map((page) => <UserPage 
            page={page}
            key={`page-${page}`} 
            onShowUser={showUser}
        />);
    }

    return (
        <>
            <Layout>
                <ScrollView>
                    <ViewPager 
                        style={styles.userListContainer} 
                        initialPage={0}
                        onPageSelected={handlePageSelect}
                    >
                        {renderPages()}
                    </ViewPager>
                </ScrollView>
                <PageIndicator totalPages={totalPages} currentPage={currentPage} />
            </Layout>
            <UserDetailsSheet 
                ref={userDetailsSheetRef} 
            />
        </>
        
    );
}


