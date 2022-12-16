import { StyleSheet } from "react-native";
import { wp, hp } from '../../component/Dimensions';

export const Loginstyles = StyleSheet.create({
    container: {
        height: hp('100%'),
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    TextContainer: {
        flexDirection: "row", borderWidth: 1,
        borderColor: '#00008B',
        alignItems: "center",
        width: '80%',
    },
    TextinputContainer: {
        display: 'flex',
        marginVertical: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50
    },
    loginBtn: {
        width: wp('60%'),
        height: hp('8%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('1%'),
        backgroundColor: '#4169E1',
        marginTop: hp('7%'),
        alignSelf: 'center',
        borderRadius: wp('4%'),
    },
    loginBtnTxt: {
        fontSize: wp('6%'),
        padding: wp('1%'),
        color: 'white',
        borderRadius: hp('10%'),
        textAlign: 'center',
    },

});
