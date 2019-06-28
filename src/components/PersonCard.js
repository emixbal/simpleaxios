import React, {Component} from 'react'

class PersonCard extends Component{
    render(){
        return(
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <img src={this.props.avatar} alt="avaratar" />
                        <h5 className="card-title">{this.props.first_name}</h5>
                        <p className="card-text">{this.props.email}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <hr />
            </div>
        )  
    }
}

export default PersonCard;