import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('hello');
    }

    state = {
        count: 0,
    };

    add = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState((current) => ({ count: current.count - 1 }));
    };

    componentDidMount() {
        //component 탄생
        console.log('component rendered');
    }

    componentDidUpdate() {
        console.log('I just update!');
    }

    componentWillUnmount() {
        //component 죽음
        console.log('Goodbye, cruel world');
    }

    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>MINUS</button>
            </div>
        );
    }
}

export default App;
