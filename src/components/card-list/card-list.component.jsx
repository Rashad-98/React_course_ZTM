import { Component } from "react";
import Card from '../card/card'

class CardList extends Component {
    render() {
        // console.log(this.props.listItems);
        return (
            <div>
                {this.props.listItems.map((item)=>{
                    const {id, name, email} = item;
                    return <Card key={id} name={name} email={email} />
                })}
            </div>
        );
    }
}

export default CardList;