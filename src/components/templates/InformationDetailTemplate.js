import InformationSection from "../common/InformationSection";
import InformationDetailLayout from "../common/InformationDetailLayout";
import Circle from "../common/Circle";
import InformationSectionDetail from "../common/InformationSectionDetail";
import {LANGUAGE} from '../../assets/index';
import {useRef} from 'react';

const InformationDetailTemplate = ({
    firstName, 
    lastName, 
    email, 
    phoneNo, 
    updateContractFirstName, 
    updateContractLastName, 
    updateContractEmail, 
    updateContractPhoneNo,

}) =>{
    
    
    const refFirstName= useRef();
    const refLastName= useRef();
    const refEmail = useRef();
    const refPhone = useRef(); 
    const ToLastName = () => refLastName.current.focus();
    const ToEmail = () => refEmail.current.focus();
    const ToPhone = () => refPhone.current.focus();

    return(
        <InformationDetailLayout>
            <Circle size={200}/>

            <InformationSection title={LANGUAGE.MAIN_INFORMATION}>
                <InformationSectionDetail title={LANGUAGE.FIRST_NAME} refInner={refFirstName} value={firstName} fnUpdate={updateContractFirstName} onSubmit={ToLastName}/>
                <InformationSectionDetail title={LANGUAGE.LAST_NAME} refInner={refLastName} value={lastName} fnUpdate={updateContractLastName} onSubmit={ToEmail}/>
            </InformationSection>

            <InformationSection title={LANGUAGE.SUB_INFORMATION}>
                <InformationSectionDetail title={LANGUAGE.EMAIL} refInner={refEmail} value={email} fnUpdate={updateContractEmail} onSubmit={ToPhone}/>
                <InformationSectionDetail title={LANGUAGE.PHONE} refInner={refPhone} value={phoneNo} fnUpdate={updateContractPhoneNo} onSubmit={()=>{}}/>
            </InformationSection>
            
        </InformationDetailLayout>
    )
}

export default InformationDetailTemplate;