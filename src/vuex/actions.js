import cookies from 'js-cookie'
import api from '../api'
import * as types from './mutation-types'

export const getArticleDetail = ({dispatch}, opts) => {
  api.getArticleDetail(opts).then(function (res) {
    dispatch(types.GET_ARTICLE_DETAIL, res.body.article)
  })
}

export const getArticleList = ({dispatch}, opts) => {
  api.getArticleList(opts).then(function (res) {
    dispatch(types.GET_ARTICLE_LIST, res.body)
  })
}

export const getAdminArticles = ({dispatch}, opts) => {
  api.getAdminArticles(opts).then(function (res) {
    dispatch(types.GET_ADMIN_ARTICLES, res.body)
  })
}

export const getNewArticles = ({dispatch}) => {
  api.getArticleList({
    start: 0,
    limit: 5
  }).then(function (res) {
    dispatch(types.GET_NEW_ARTICLES, res.body)
  })
}

export const createArticle = ({dispatch}, opts) => {
  return api.createArticle(opts).then(function (res) {
    if (res.body.ok) {
      dispatch(types.SHOW_MESSAGE, res.body.message)
    } else {
      dispatch(types.SHOW_ERROR_MESSAGE, res.body.message)
    }
  })
}

export const updateArticle = ({dispatch}, opts) => {
  api.updateArticle(opts).then(function (doc) {
    dispatch(types.UPDATE_EDIT_ARTICLE, doc)
    console.log(doc)
  })
}

export const removeArticleById = ({dispatch}, opts) => {
  return api.removeArticleById(opts).then(function (res) {
    if (res.body.ok) {
      dispatch(types.SHOW_MESSAGE, res.body.message)
    } else {
      dispatch(types.SHOW_ERROR_MESSAGE, res.body.message)
    }
  })
}

export const distoryModelMessage = ({dispatch}) => {
  dispatch(types.SHOW_MESSAGE, '')
}

export const userLogin = ({dispatch}, opts) => {
  return api.userLogin(opts).then(function (res) {
    if (res.body.ok) {
      cookies.set('token', res.body.token, { expires: 7 })
      dispatch(types.SHOW_MESSAGE, res.body.message)
    } else {
      dispatch(types.SHOW_ERROR_MESSAGE, res.body.message)
    }
  })
}

export const userRegister = ({dispatch}, opts) => {
  return api.userRegister(opts).then(function (res) {
    if (res.body.ok) {
      dispatch(types.SHOW_MESSAGE, res.body.message)
    } else {
      dispatch(types.SHOW_ERROR_MESSAGE, res.body.message)
    }
  })
}
