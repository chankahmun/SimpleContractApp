import {store} from '../redux/rdxStore';

const getState = () => store.getState().data;

export default {
    getFirstName: () => getState().sContractFirstName,
    getLastName: () => getState().sContractLastName
}