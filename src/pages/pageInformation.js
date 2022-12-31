import React, {Component} from 'react';
import {connect} from 'react-redux';
import InformationDetailTemplate from '../components/templates/InformationDetailTemplate';
import dispatch from '../helpers/dispatchHelper';

const onChangeFirstName = (value) => dispatch.updateContractFirstName(value);
const onChangeLastName = (value) => dispatch.updateContractLastName(value);
const onChangeEmail = (value) => dispatch.updateContractEmail(value);
const onChangePhone = (value) => dispatch.updateContractPhoneNo(value);

class PageInformation extends Component{

    render(){
        const {firstName, lastName, email, phoneNo} = this.props;
      
     
        return <InformationDetailTemplate 
            firstName = {firstName}
            lastName = {lastName}
            email = {email}
            phoneNo = {phoneNo}
            updateContractFirstName = {onChangeFirstName}
            updateContractLastName= {onChangeLastName}
            updateContractEmail = {onChangeEmail}
            updateContractPhoneNo = {onChangePhone}
            />
    }
}

const MapStateToProps = (state) => {
    return{
        firstName:state.data.sContractFirstName,
        lastName:state.data.sContractLastName,
        email:state.data.sContractMail,
        phoneNo:state.data.sContractPhone,

    }
}

export default connect(MapStateToProps)(PageInformation);