import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const {padding, color, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    forgetText:{
        textAlign:"center",
        color:color.black,
        marginBottom: padding,
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
    }
});

export default styles;