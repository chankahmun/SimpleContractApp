import {
  SETUP,
  SELECT_CONTRACT,
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_PHONE_NO,
  UPDATE_INTO_CONTRACT_LIST,
  RESET_CONTRACT
} from './rdxType';

import { Utils } from '../utils/utils';

const initialState = {
    contracts:[],
    selectedContract: {},
    sContractFirstName: '',
    sContractId: '',
    sContractLastName: '',
    sContractMail: '',
    sContractPhone: '',
    updateTime:'',
  };
   
  export default (state = initialState, action) => {

    let nowTime = Utils.currentDateTime()
    
    switch (action.type) {
      case RESET_CONTRACT:

        return {
          ...state,
          contracts: action.contract
        }
      case UPDATE_INTO_CONTRACT_LIST:
        let pos = state.contracts.findIndex(x => x.id == state.sContractId);
        let updateContracts = state.contracts;

        updateContracts[pos].firstName = state.sContractFirstName;
        updateContracts[pos].lastName = state.sContractLastName;
        updateContracts[pos].email = state.sContractMail;
        updateContracts[pos].phone = state.sContractPhone;
        
        return {
          ...state,
          contracts: updateContracts,
          updateTime: nowTime
        };
      case SETUP:

        return {
          ...state,
          contracts: action.payload
        };
      case SELECT_CONTRACT:

        return {
          ...state,
          sContractId: action.contract.id,
          sContractFirstName: action.contract.firstName,
          sContractLastName: action.contract.lastName,
          sContractMail: action.contract.email,
          sContractPhone: action.contract.phone
        };
      case UPDATE_FIRST_NAME:

        return {
          ...state,
          sContractFirstName: action.firstName
        };
      case UPDATE_LAST_NAME:

        return {
          ...state,
          sContractLastName: action.lastName
        };
      case UPDATE_EMAIL:
        
        return {
          ...state,
          sContractMail: action.email
        };
      case UPDATE_PHONE_NO:

        return {
          ...state,
          sContractPhone: action.phone
        };  
      default:
        return state;
    }

  };