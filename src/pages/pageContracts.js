import React, { Component } from 'react';
import {connect} from 'react-redux';
import ContractsTemplate from '../components/templates/ContractsTemplate';
import dispatch from '../helpers/dispatchHelper';
import network from '../helpers/networkHelper';
import {URL, SCREEN_NAME} from '../assets/index';

const OnRefreshList = (value) => dispatch.resetContract(value);
const OnSelectedContract = (value) => dispatch.getSelectedContract(value);

class PageContracts extends Component{

    navigation =(contract)=>{
        const {navigation} = this.props;
        
        navigation.navigate(SCREEN_NAME.CONTRACT_DETAIL);
        OnSelectedContract(contract.item);
    
    }

    onRefresh = async() =>{

        let response = await network.get(URL.CONSTRACTS_JSON)
        OnRefreshList(response)
     
    }



    render(){
        const {contracts} = this.props
        return <ContractsTemplate onRefresh={this.onRefresh} data={contracts} click={this.navigation}/>;    
    }
}

const MapStateToProps = (state) => {

    return {
        contracts: state.data.contracts, 
        updateTime: state.data.updateTime
    }
}

export default connect(MapStateToProps)(PageContracts);