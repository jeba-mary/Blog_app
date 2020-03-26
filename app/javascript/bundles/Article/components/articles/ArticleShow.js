import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';

class ArticleShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  render() {
    if(!this.props.article) {
      return <div></div>;
    }
    const { title, content } = this.props.article;
    return(
      <div class="container">
        <h3>ArticleShow</h3>
        <h4>Title: {title}</h4>
        <p>Content: {content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { article: state.articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArticle })(ArticleShow);