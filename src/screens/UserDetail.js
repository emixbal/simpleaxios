import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getDeatail } from '../redux/actions/user'

class UserDetail extends Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getDeatail(id))
    }
    render(){
        console.log(this.props.user.isLoading);
        
        if(this.props.user.isLoading===true){
            return <div>Loading...</div>
        }
        return(
            <div>
                {
                    this.props.user.user.data.email
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}
export default connect(mapStateToProps)(UserDetail);