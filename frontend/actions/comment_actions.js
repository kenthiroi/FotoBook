import * as CommentAPIUtil from '../util/comments_api_util'
import { receiveErrors } from './session_actions'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

export const receiveAllComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const removePost = postId =>  ({
  type: REMOVE_POST,
  postId
})

export const createPost = post => dispatch => (
  CommentAPIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const getPost = postId => dispatch => (
  CommentAPIUtil.getPost(postId).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const getAllPosts = () => dispatch => (
  CommentAPIUtil.getPostIndex().then(posts => (
    dispatch(receiveAllPosts(posts))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const editPost = post => dispatch => (
  CommentAPIUtil.editPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const deletePost = postId => dispatch => (
  CommentAPIUtil.deletePost(postId).then(() => (
    dispatch(removePost(postId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)
