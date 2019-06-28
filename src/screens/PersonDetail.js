import React, {Component} from 'react';
import axios from 'axios';

class PersonDetail extends Component{
    state={
        personId:0
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.setState({personId:id})
    }
    render(){
        return(
            <div>
                person ID: {this.state.personId}
            </div>
        )

    }
}  
export default PersonDetail;