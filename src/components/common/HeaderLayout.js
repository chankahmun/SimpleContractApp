import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { DEVICES } from '../../assets/index';

const HeaderLayout = ({children}) =>{
    return (
        <View style={styles.Layout}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        width:DEVICES.WIDTH,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf: 'stretch',
        
    }
})



export default HeaderLayout;