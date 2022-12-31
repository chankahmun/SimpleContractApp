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


export const setup = () =>{
    return {
        type: SETUP
    }
}

export const selectContract = (sContract) =>{
    return {
        type:SELECT_CONTRACT,
        contract: sContract
    }
}

export const updateFirstName = (fn) => {
    return {
        type:UPDATE_FIRST_NAME,
        firstName: fn
    }
}

export const updateLastName = (ln) => {
    return {
        type: UPDATE_LAST_NAME,
        lastName:ln
    }
}

export const updateEmail = (email) => {
    return {
        type: UPDATE_EMAIL,
        email:email
    }
}

export const updatePhoneNo = (phoneNo) => {
    return {
        type:UPDATE_PHONE_NO,
        phone: phoneNo
    }
}

export const updateIntoContractList = () =>{
    return {
        type: UPDATE_INTO_CONTRACT_LIST,

    }
}

export const resetContract = (contracts) => {

    return {
        type: RESET_CONTRACT,
        contract: contracts
    }
}