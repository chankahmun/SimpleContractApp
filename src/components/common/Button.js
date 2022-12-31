import {TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({children, click}) =>{
    return (
        <TouchableOpacity onPress={click}>
            {children}
        </TouchableOpacity>
    )
}

Button.prototype={
    click:PropTypes.func
}

export default Button;