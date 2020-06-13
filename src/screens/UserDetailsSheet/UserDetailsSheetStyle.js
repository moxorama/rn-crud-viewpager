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
        marginTop: Metrics.baseMargin,
    },

    avatar: {
        height: Metrics.baseMargin * 16,
        width: Metrics.baseMargin * 16,
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
        padding: Metrics.baseMargin * 2,
    },

    destroyIcon: {
        color: Colors.danger,
    },

    footerContainer: {
        padding: Metrics.baseMargin * 2,
    }
});