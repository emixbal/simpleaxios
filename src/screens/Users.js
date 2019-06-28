import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserCard from '../components/UserCard'

import { get } from '../redux/actions/user';


class Users extends Component {
    componentDidMount(){
        this.props.dispatch(get())
    }
    handleRedirect(id){
        this.props.history.push('/user/'+id)
    }
    render(){
        if(this.props.users.isLoading===true){
            return <div>Loading...</div>
        }
        return(
            <div>
                <hr />
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <hr />
                <div className="row">
                {
                    this.props.users.data.data.map((data, index) =>
                        <UserCard
                            key={data.id}
                            actorName={data.first_name}
                            avatarUrl={data.avatar}
                            actorId={data.id}
                        />
                        
                    )
                }

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      users: state.user
    }
}
export default connect(mapStateToProps)(Users);
