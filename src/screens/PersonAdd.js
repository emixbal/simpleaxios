import React, {Component} from 'react';
import axios from 'axios';

class PersonAdd extends Component{
    state = {
        user:{},
        name:'',
        job:'',
    }

    handleClick(){
        const that = this
        axios.post('https://reqres.in/api/users',{
            name: this.state.name,
            job: this.state.job
          })
        .then(function(result){
            that.setState({user:result.data})
            that.props.history.push('/personprofile/'+result.data.id)
        })
        .catch(function(e){
            console.log(e);
            
        })
    }

    render(){
        return(
            <div className="col-sm-5">
                <hr />
                <div className="form-group">
                    <label for="name">job address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelo"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={(event)=>this.setState({name:event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputjob1">job address</label>
                    <input
                        type="job"
                        className="form-control"
                        id="exampleInputjob1"
                        aria-describedby="jobHelp"
                        placeholder="Enter job"
                        value={this.state.job}
                        onChange={(event)=>this.setState({job:event.target.value})}

                    />
                </div>
                <button className="btn btn-primary" onClick={()=>this.handleClick()}>Submit data</button>
            </div>
        )
    }
}

export default PersonAdd;