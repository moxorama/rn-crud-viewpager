import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import styles from './UserListScreenStyle';


export default function PageIndicator({ currentPage, totalPages }) {
    renderDot = (dotNumber) => {
        return (
            <View key={`dot-${dotNumber}`} style={[styles.viewPagerDot, (currentPage === dotNumber) && styles.viewPagerDotSelected]} />
        );
    }

    renderDots = () => {
        const pagesList = [...Array(totalPages).keys()];
        
        return pagesList.map((page) => renderDot(page));
    }

    return (
        <SafeAreaView style={styles.pageIndicatorContainer}>
            {renderDots()}
        </SafeAreaView>
    );
}


