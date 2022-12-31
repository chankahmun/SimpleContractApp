import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width * 0.90;
const deviceHeight = Dimensions.get('screen').height;

export const IMG ={
    SEARCH: require("./images/search.png"),
    PLUS: require("./images/plus.png")
}


export const LANGUAGE={
    CONTRACTS: 'Contracts',
    MAIN_INFORMATION: 'Main Information',
    SUB_INFORMATION: 'Sub Information',
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    EMAIL: 'Email',
    PHONE: 'Phone',
    CANCEL: 'Cancel',
    SAVE: 'Save'
}

export const COLORS={
    ORANGE:'#ff8c00',
    GRAY:'#dbd9d9',
    BLACK: '#050505'
}

export const DEVICES={
    WIDTH:deviceWidth,
    HEIGHT:deviceHeight
}

export const URL={
    CONSTRACTS_JSON : "https://raw.githubusercontent.com/chankahmun/asset/gh-pages/contracts.json"
}

export const SCREEN_NAME ={
    CONTRACTS: "CONTRACTS",
    CONTRACT_DETAIL: "CONTRACT_DETAIL"
}