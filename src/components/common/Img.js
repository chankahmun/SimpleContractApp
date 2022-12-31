import {Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../assets/index';

const Img = ({imageName}) =>{
    return <Image  style={styles.image} source={imageName}/>
}

const styles = StyleSheet.create({
    image:{
        height:30,
        width:30,
        alignSelf:'center',
        tintColor:COLORS.ORANGE
    }
})

Img.prototype = {
    imageName: PropTypes.string
}

export default Img;