import { StyleSheet } from "react-native";
import { proportionedPixel } from "../../component/Stylescoponent";

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#F0F8FF',
        flex: 1,
        marginTop: proportionedPixel(10)
    },
    textIp: {
        height: proportionedPixel(20),
        width: proportionedPixel(150),
        marginHorizontal: proportionedPixel(5)
    },
    textIPBar: {
        borderWidth: 2,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: proportionedPixel(5),
        marginRight: proportionedPixel(5)
    },
    searchIcon: {
        height: proportionedPixel(13),
        width: proportionedPixel(13),
        marginHorizontal: proportionedPixel(5),
    }
})
