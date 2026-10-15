import {List, Item, Btn} from "./ResultList.styled"
import { Component } from "react"


class ResultList extends Component{

    render(){
        const {contacts, filter, onDelete} = this.props;
        
    return  <List>  {contacts
        .filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  ).map(({id, name, number})=>{
            return (
                
                    <Item key={id}>
                        <p>{name}:</p>
                        <p>{number}</p>
                        <Btn type="button" onClick={()=>onDelete(id)}>Delete</Btn>
                    </Item>
               

            )
        })}</List>
    }
}
export default ResultList