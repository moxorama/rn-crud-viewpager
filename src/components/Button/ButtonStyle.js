import { StyleSheet } from 'react-native'

import { Metrics, Colors } from '~/theme';

export default StyleSheet.create({
    buttonContainer: {
        height: Metrics.baseMargin * 6,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonWrapper: {
        borderRadius: 4,
        overflow: 'hidden',
    },

    buttonText: {
        color: Colors.contentOnPrimary,
        fontSize: 16,
        fontWeight: 'bold',
    }
});