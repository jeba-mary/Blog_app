import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles, deleteArticle } from '../../actions';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  renderAdmin(article) {
      return (
        <div className="right floated content">
          <Link to={`/articles/edit/${article.id}`} class="btn btn-primary" >Edit</Link>
          <button onClick={() => this.props.deleteArticle(article.id)} class="btn btn-danger">Delete</button>
        </div>
      )
  }

  renderList() {
    return this.props.articles.map(article => {
      return (
        <div class="row">
          <div class="col-sm-12">
            <div class ="card" key={article.id}>
              <div class="card-body">
                <h5 class="card-title"><Link to={`/articles/${article.id}`} style={{textDecoration: "none", color: "black"}}>{article.title}</Link></h5>
                <p class="card-text"> {article.content}</p>
                {this.renderAdmin(article)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
 
  render() {
    return (
      <div>
        <br />
        <div class="container">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    articles: Object.values(state.articles),
  };
}

export default connect(mapStateToProps, { fetchArticles, deleteArticle })(ArticleList);