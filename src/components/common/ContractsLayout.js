import {View, StyleSheet} from 'react-native';

const ContractLayout = ({children}) =>{
    return (
        <View style={styles.Layout}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        width:'100%',
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:2,
        
        
    }
})

export default ContractLayout