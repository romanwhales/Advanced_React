import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';


const styles = {
    article:{
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title:{
        fontWeight: 'bold'
    },
    date:{
        fontSize: '0.85em',
        color: '#888'
    },
    author:{
        paddingTop: 10,
        paddingBottom: 10
    },
    body:{
        paddingLeft: 20
    }
}

const dateDisplay = (dateString) => {
    new Date(dateString).toDateString();
}

const Article = (props) => {
    const {article,author} = props;
    // const author = store.lookUpAuthor(article.authorId);
    return(
        <div style={styles.article}>
            <div style={styles.title}>
                {article.title}
            </div>
            <div style={styles.date}>
                {dateDisplay(article.date)}
            </div>
            <div style={styles.author}>
               <a href={author.website}> {author.firstName} {author.lastName} </a>
            </div>
            <div>
                {article.body}
            </div>
        </div>
    )
}



Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}

function extraProps(store,originalProps){
    return{
        author: store.lookUpAuthor(originalProps.article.authorId),
    }
}

// const ArticleContainer = (props,{store}) => {
//     return <Article {...props} store={store}/>
// }

// ArticleContainer.contextTypes = {
//     store: PropTypes.object,

// }

// const ArticleContainer = storeProvider();

export default storeProvider(extraProps)(Article);