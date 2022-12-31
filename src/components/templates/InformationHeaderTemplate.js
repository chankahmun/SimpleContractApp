import HeaderLayout from "../common/HeaderLayout";
import Label from "../common/Label";
import Button from "../common/Button";
import dispatch from "../../helpers/dispatchHelper";
import reduxStore from "../../helpers/getStoreHelper";
import {LANGUAGE, COLORS} from '../../assets/index';
import { Utils } from "../../utils/utils";

const OnPressSave = (navigation) => {

    let fName = reduxStore.getFirstName();
    if(Utils.isStringEmpty(fName)) return;

    let lName = reduxStore.getLastName();
    if(Utils.isStringEmpty(lName)) return;

    dispatch.updateIntoContractList();
    OnPressBack(navigation);
};

const OnPressBack = (navigation) => navigation.goBack();

const InformationHeaderTemplate = ({navigation})=>{

    return (
        <HeaderLayout>
            <Button click={()=>{OnPressBack(navigation)}}>
                <Label color={COLORS.ORANGE} title={LANGUAGE.CANCEL}></Label>
            </Button>
            
            <Button click={()=>{OnPressSave(navigation)}}>
                <Label color={COLORS.ORANGE} title={LANGUAGE.SAVE}></Label>
            </Button>
        </HeaderLayout>
    )
    
}

export default InformationHeaderTemplate;