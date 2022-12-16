import { StyleSheet } from 'react-native';

import { fontScale, heightScale, widthScale } from '../utils/Utils';

export const globalstyles = StyleSheet.create({
    mainview: {
        display: 'flex',
        marginHorizontal: widthScale(10),
        marginVertical: heightScale(10)
    },
    headertext: {
        color: COLORS.MAROON,
        fontSize: fontScale(60),
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    flexviewforpass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLORS.DARK_GRAY,
    },
    error: {
        color: COLORS.RED,
    },

});