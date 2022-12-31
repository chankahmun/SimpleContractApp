import { selectContract, setup, resetContract, updateIntoContractList, updateEmail, updateFirstName, updateLastName, updatePhoneNo} from '../redux/rdxAction';
import {store} from '../redux/rdxStore';

const dispatch = (funct) =>store.dispatch(funct);

export default {
    updateContractFirstName: (value) => dispatch(updateFirstName(value)),
    updateContractLastName: (value) => dispatch(updateLastName(value)),
    updateContractEmail: (value) => dispatch(updateEmail(value)),
    updateContractPhoneNo: (value) => dispatch(updatePhoneNo(value)),
    updateIntoContractList:() => dispatch(updateIntoContractList()),
    resetContract: (value) => dispatch(resetContract(value)),
    setup: () => dispatch(setup()),
    getSelectedContract: (value)=> dispatch(selectContract(value))
}