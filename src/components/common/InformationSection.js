
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/index';
import PropTypes from 'prop-types';

const InformationSection = ({title, children})=>{
    return (
        <View style={styles.Container}>
            <View style={styles.Section}>
                <Text style={styles.Label}>{title}</Text>
            </View>
        
            {children}
  
           
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
    },
    Section:{
        width:'100%',
        backgroundColor:COLORS.GRAY,
        paddingHorizontal:'5%'
    },
    Label:{
        fontWeight:'bold',
        fontSize:30,
        color: COLORS.BLACK
    },
})

InformationSection.prototype = {
    title: PropTypes.string
}

export default InformationSection;