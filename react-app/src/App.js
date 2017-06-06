import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    static componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }

    static componentDidMount() {
        console.log('componentDidMount')
    }

    static componentWillUnmount(){
        console.log('componentWillUnmount')
    }


}

class Wrapper extends React.Component {
    static mount(){
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    static unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={Wrapper.mount.bind(this)}>Mount</button>
                <button onClick={Wrapper.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>

        )
    }
}

export default Wrapper
