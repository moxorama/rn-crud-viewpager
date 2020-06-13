import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

import { Colors } from '~/theme';

export default StyleSheet.create({
    headerContainer: {
        paddingTop: Constants.statusBarHeight,
        height: 64 + Constants.statusBarHeight,
        flexGrow: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.contentOnPrimary,
    },

    contentContainer: {
        flexGrow: 1,
        backgroundColor: '#eee',
    }
});