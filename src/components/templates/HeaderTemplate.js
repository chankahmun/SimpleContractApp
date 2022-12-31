import {IMG} from "../../assets/index";
import HeaderLayout from "../common/HeaderLayout";
import Img from "../common/Img";
import Label from "../common/Label";
import Button from "../common/Button";
import {LANGUAGE} from "../../assets/index";

const HeaderTemplate = ()=>{
    return (
        <HeaderLayout>
            <Button click={()=>{console.log('se')}}>
                <Img imageName={IMG.SEARCH}></Img>
            </Button>
            
            <Label title={LANGUAGE.CONTRACTS}></Label>
            
            <Button click={()=>{console.log('ee')}}>
                <Img imageName={IMG.PLUS}></Img>
            </Button>
        </HeaderLayout>
    )
    
}

export default HeaderTemplate;