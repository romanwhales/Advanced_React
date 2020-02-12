import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => (
//     <h2>Hello React Now</h2>
// )


class App extends React.Component{
    state = {
        answer: 42
    }
    asyncFunc = () => {
        return Promise.resolve(37)
    }
    async componentDidMount(){
        this.setState({
            answer: await this.asyncFunc()
        })
    }
    render(){
        return(
        <h2>Hello Class Component -- {this.state.answer} now</h2>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)