import {ScrollView, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const InformationDetailLayout = ({children}) =>{
    return (
        <ScrollView >
            <View style={styles.Layout}>
                {children}
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Layout:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
        
    }
})



export default InformationDetailLayout;