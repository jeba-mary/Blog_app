import React      from 'react';
import { connect }      from 'react-redux';
import ArticlesActions    from '../actions/articles';

class MainContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ArticlesActions.fetchArticles());
  }
  render() {
    const { articles } = this.props;
    return (
      <div id ="authentication_container" className="application-container">
        <div className='main-conatiner'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(MainContainer);