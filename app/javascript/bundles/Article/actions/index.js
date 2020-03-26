import axios from 'axios';
import { CREATE_ARTICLE,
FETCH_ARTICLES, FETCH_ARTICLE,
DELETE_ARTICLE, EDIT_ARTICLE, SIGN_UP } from "./types";
import history from '../history';


export const signUp = formValues => async (dispatch) => {
  const response  = await axios.post('/users', { ...formValues});
  
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push('/');
}

export const createArticle = formValues => async (dispatch) => {
  const response = await axios.post('/api/v1/articles', { ...formValues });

  dispatch({ type: CREATE_ARTICLE, payload: response.data });
  history.push('/');
};

export const fetchArticles = () => async dispatch => {
  const response = await axios.get('/api/v1/articles');

  dispatch({ type: FETCH_ARTICLES, payload: response.data });
};


export const fetchArticle = (id) => async dispatch => {
  const response = await axios.get(`/api/v1/articles/${id}`);

  dispatch({ type: FETCH_ARTICLE, payload: response.data });
};

export const editArticle = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/api/v1/articles/${id}`, formValues);

  dispatch({ type: EDIT_ARTICLE, payload: response.data });
  history.push('/');

};

export const deleteArticle = (id) => async dispatch => {
  await axios.delete(`/api/v1/articles/${id}`);

  dispatch({ type: DELETE_ARTICLE, payload: id });
  history.push('/');
};