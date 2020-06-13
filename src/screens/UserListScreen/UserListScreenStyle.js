import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window');

import { Colors, Metrics } from '~/theme';

export default StyleSheet.create({
    userListContainer: {
        height: height - 200,
    },

    userListItemContainer: {
        height: Metrics.listItemHeight,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.separator,
    },

    userListItemContent: {
        height: Metrics.listItemHeight,
        paddingHorizontal: Metrics.baseMargin * 2,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },


    userAvatar: {
        height: 56,
        width: 56,
        resizeMode: 'contain',
        borderRadius: 56/2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.border,
        marginRight: Metrics.baseMargin * 2,
    },


    pageIndicatorContainer: {
        flexGrow: 0,
        marginHorizontal: Metrics.baseMargin * 3,
        height: Metrics.baseMargin * 3,
        paddingVertical: Metrics.baseMargin * 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewPagerDot: {
        height: Metrics.baseMargin,
        width: Metrics.baseMargin,
        borderRadius: Metrics.baseMargin,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: Colors.separator,
    },

    viewPagerDotSelected: {
        backgroundColor: Colors.primary,
    },
});