import React from "react";
// import DataApi from 'state-api';
// import {data} from '../testData';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';


// const api = new DataApi(data);

class App extends React.Component{
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext(){
        return{
            store: this.props.store
        }
    }
    state = this.props.store.getState();
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    }
    render(){
        {console.log(this.state)}
        return(
            <div>
                <ArticleList articles ={this.state.articles} store = {this.props.store}/>
            </div>
        )
    }
}

export default App;