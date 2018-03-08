import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;

const normalize = (fontSize) => {
    return Math.round(fontSize * realWidth / 375);
}

const color = {
    black: "rgba(0,0,0,.84)",
    light_black: "#414141",
    main: "rgb(99,139,250)",
    white: "#ffffff",
    light_grey: "#eaeaea",
    grey: "#ccc",
    red: "red"
}

const fontSize = {
    small: normalize(14),
    regular: normalize(15),
    large: normalize(22)
}

const fontFamily = {
    bold: "RobotoBold",
    medium: "RobotoMedium",
    regular: "RobotoRegular",
    light: "RobotoLight",
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "rgb(207,217,233)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(99,139,250)" : "#fff";

const tabIconStyle = { size: 25, color: tabColor, selected: selectedTabColor }

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    normalize
}