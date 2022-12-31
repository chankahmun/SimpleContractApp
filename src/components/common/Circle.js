import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/index';
import PropTypes from 'prop-types';

const Circle = ({size=40}) =>{
    return <View style={[styles.circle, {height: size, width: size, borderRadius: size}]}/>
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:COLORS.ORANGE,
        margin:10
    }
})

Circle.prototype={
    size:PropTypes.number
}


export default Circle;