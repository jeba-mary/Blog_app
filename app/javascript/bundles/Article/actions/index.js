import axios from 'axios';
import { CREATE_ARTICLE,
FETCH_ARTICLES, FETCH_ARTICLE,
DELETE_ARTICLE, EDIT_ARTICLE, SIGN_UP, SIGN_IN, SIGN_OUT } from "./types";
import history from '../history';


export const signUp = formValues => async (dispatch) => {
  const response  = await axios.post('/users', { ...formValues});
  
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push('/');
}

export const signIn = formValues => async (dispatch) => {
  const response  = await axios.post('/users/sign_in', { ...formValues});
  
  dispatch({ type: SIGN_IN, payload: response.data });
  history.push('/');
}

export const signOut = formValues => async (dispatch) => {
  const response = await axios.delete('/users/sign_out');
  dispatch({ type: SIGN_OUT, payload: response.data });
  history.push('/sign_in');
}

export const createArticle = formValues => async (dispatch) => {
  const response = await axios.post('/articles', { ...formValues });

  dispatch({ type: CREATE_ARTICLE, payload: response.data });
  history.push('/');
};

export const fetchArticles = () => async dispatch => {
  const response = await axios.get('/articles');

  dispatch({ type: FETCH_ARTICLES, payload: response.data });
};


export const fetchArticle = (id) => async dispatch => {
  const response = await axios.get(`/articles/${id}`);

  dispatch({ type: FETCH_ARTICLE, payload: response.data });
};

export const editArticle = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/articles/${id}`, formValues);

  dispatch({ type: EDIT_ARTICLE, payload: response.data });
  history.push('/');

};

export const deleteArticle = (id) => async dispatch => {
  await axios.delete(`/articles/${id}`);

  dispatch({ type: DELETE_ARTICLE, payload: id });
  history.push('/');
};