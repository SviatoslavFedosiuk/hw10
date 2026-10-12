import {List, Item} from "./ResultList.styled"
import { Component } from "react"


class ResultList extends Component{

    render(){
        const {contacts, filter} = this.props;
        
    return  <List>  {contacts
        .filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  ).map(({id, name, number})=>{
            return (
                
                    <Item key={id}>
                        <p>{name}:</p>
                        <p>{number}</p>
                    </Item>
               

            )
        })}</List>
    }
}
export default ResultList