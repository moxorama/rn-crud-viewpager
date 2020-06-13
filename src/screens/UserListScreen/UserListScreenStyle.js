import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

import { Colors, Metrics } from '~/theme';

export default StyleSheet.create({
    userListContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    },

    userListItemContainer: {
        height: Metrics.listItemHeight,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.separator,
        flexGrow: 0,
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

    userAvatarContainer: {
        height: 48,
        width: 48,
        borderRadius: 48/2,
        overflow: 'hidden',
        marginRight: Metrics.baseMargin * 2,
        borderColor: Colors.border,
    },

    userAvatar: {
        height: 48,
        width: 48,
        resizeMode: 'contain',
        borderRadius: 48/2,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: Colors.primary,
    },

    usersPage: {
        flexGrow: 1,
        width,
        height,
        flexDirection: 'column',
    },


    pageIndicatorContainer: {
        flexGrow: 0,
        marginHorizontal: Metrics.baseMargin * 3,
        height: Metrics.baseMargin * 6,
        paddingBottom: Metrics.baseMargin * 3,
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

    createUserFab: {
        position: 'absolute',
        bottom: Metrics.baseMargin * 8,
        right: Metrics.baseMargin * 2,
        backgroundColor: Colors.primary,
        width:  Metrics.baseMargin * 8,
        height:  Metrics.baseMargin * 8,
        borderRadius:  Metrics.baseMargin * 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    createUserFabContent: {
        color: Colors.contentOnPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        textAlign: 'center',
    },
});