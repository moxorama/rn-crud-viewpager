import { StyleSheet } from 'react-native'

import { Metrics, Colors } from '~/theme';

export default StyleSheet.create({
    userDetailsContainer: {
        paddingHorizontal: Metrics.baseMargin * 2,
        paddingVertical: Metrics.baseMargin,
    },

    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Metrics.baseMargin,
    },

    avatar: {
        height: Metrics.baseMargin * 10,
        width: Metrics.baseMargin * 10,
        borderRadius: Metrics.baseMargin * 5,
        backgroundColor: Colors.primary,
    },

    userDataInput: {
        marginVertical: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.border,
        height: Metrics.baseMargin * 5,
        paddingHorizontal: Metrics.baseMargin,
        fontSize: 16,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: Metrics.baseMargin * 2,
        paddingTop: Metrics.baseMargin,
    },

    destroyIcon: {
        color: Colors.danger,
    },

    footerContainer: {
        paddingHorizontal: Metrics.baseMargin * 2,
        paddingBottom: Metrics.baseMargin * 2,
    }
});