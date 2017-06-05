import React from 'react';

class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

//const App = () => <h1>Hello, Kothagundla </h1>

App.PropTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number
}
App.defaultProps = {
    txt: "this is the default txt"
}

export  default  App