import React, { Component } from 'react';
import axios from 'axios'

import PersonCard from '../components/PersonCard'

class Person extends Component {
    state = {
        persons:[],
        angka:0
    }

    componentDidMount(){
        const that=this
        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            that.setState({persons:response.data.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }) 
    }
    render() {
        
        return (
            <div>
                <div className="row">
                {
                    this.state.persons.map((person, key)=>
                        <PersonCard
                            first_name={person.first_name}
                            email={person.email}
                            avatar={person.avatar}
                        />              
                    )
                }
                </div>
            </div>
        )
    }
}
        
export default Person;