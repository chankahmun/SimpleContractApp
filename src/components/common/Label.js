import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../assets/index';
const Label = ({title, color=COLORS.BLACK}) => {
    return <Text style={[styles.text, {color:color}]}>{title}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:20,
        textAlignVertical:'center'
    }
})

Label.prototype={
    title:PropTypes.string
}

export default Label;