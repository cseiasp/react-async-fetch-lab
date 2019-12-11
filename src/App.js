import React from 'react';

export default class App extends React.Component {

    state = {
        space: []
    }

    componentDidMount(){
        fetch( "http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(space => this.setState({space}))
        
    }

    render(){
        console.log(this.state.space.people)
        return( 
            <div>
            {/* {this.state.space.people.map( p => <p> p.name </p>)}  */}
            </div>
        )
    }
}