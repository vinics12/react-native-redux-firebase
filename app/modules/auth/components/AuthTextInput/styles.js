import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, normalize } = theme;

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },

    inputContainer:{
        width: windowWidth - 40,
        height: normalize(65),
        fontSize: fontSize.regular + 2,
        fontWeight: "600",
        borderBottomColor: "#A5A7A9"
    }
});

export default styles;