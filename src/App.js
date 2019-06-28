import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomeNav from './components/HomeNav';

import Home from './screens/Home';
import Users from './screens/Users';
import UserDetail from './screens/UserDetail';
import Person from './screens/Person';
import PersonAdd from './screens/PersonAdd';
import PersonDetail from './screens/PersonDetail';

class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <HomeNav />
                    <div className="container">
                        <Route path="/" exact component={Home} />
                        <Route path="/users/" component={Users} />                       
                        <Route path="/person/" component={Person} />
                        <Route path="/personprofile/:id" component={PersonDetail} />
                        <Route path="/person_add" component={PersonAdd} />                     
                        <Route path="/user/:id" component={UserDetail} />                        
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;