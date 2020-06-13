import { StyleSheet } from 'react-native'

import { Metrics, Colors } from '~/theme';

export default StyleSheet.create({
    userDetailsContainer: {
        padding: Metrics.baseMargin * 2,
    },

    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Metrics.baseMargin,
    },

    avatar: {
        height: Metrics.baseMargin * 12,
        width: Metrics.baseMargin * 12,
        borderRadius: Metrics.baseMargin * 8,
        backgroundColor: Colors.primary,
    },

    userDataInput: {
        marginVertical: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.border,
        height: Metrics.baseMargin * 5,
        paddingHorizontal: Metrics.baseMargin,
        fontSize: 16,
        fontWeight: 'bold',
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