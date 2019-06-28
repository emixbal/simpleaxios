import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UsersCard extends Component {
    render(){
        return(
            <div className="col-sm-3 card-box" style={{marginBottom:10}}>
                <div className="card">
                    <img className="card-img-top" src={this.props.avatarUrl} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.actorName}</h4>
                        <p className="card-text">{this.props.actorId}</p>
                        <Link to={'/user/'+this.props.actorId} className="btn btn-primary">
                            See detail
                        </Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default UsersCard;