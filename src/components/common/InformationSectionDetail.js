
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/index';
import PropTypes from 'prop-types';

const InformationSectionDetail = ({title, value, fnUpdate, onSubmit, refInner})=>{
    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>{title}</Text>
            <TextInput ref={refInner} style={styles.Input} value={value} onChangeText={(val)=>fnUpdate(val)} onSubmitEditing={onSubmit}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'5%',
        paddingVertical:'1%',
        borderBottomColor: COLORS.GRAY,
        borderBottomWidth:1
    },
    Label:{
        fontSize:20,
        width: '30%'
    },
    Input:{
        borderWidth:1,
        borderColor:'gray',
        width: '70%',
        borderRadius:10
    }
})

InformationSectionDetail.prototype = {
    title: PropTypes.string,
    value: PropTypes.string,
    fnUpdate: PropTypes.func,
    onSubmit: PropTypes.func
}

export default InformationSectionDetail;