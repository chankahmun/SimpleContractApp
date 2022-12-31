import List from '../common/List';
import Button from '../common/Button';
import Circle from '../common/Circle';
import Label from '../common/Label';
import ContractLayout from '../common/ContractsLayout';


const ContractsTemplate =({data, click, onRefresh})=>{
    return(
        <List 
            data={data} 
            onRefresh={onRefresh}
            RenderChildren={(contact)=>{
     
                return (
                    <Button click={()=>click(contact)}>
                        <ContractLayout>
                        <Circle/>
                        <Label title={`${contact.item.firstName} ${contact.item.lastName}`}/>  
                        </ContractLayout>
                         
                    </Button>
                    )
            }}/>
    )
}


export default ContractsTemplate