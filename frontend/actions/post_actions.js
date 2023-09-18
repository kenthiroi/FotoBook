import * as PostAPIUtil from '../util/posts_api_util'
import { receiveUserErrors } from './user_actions'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const REMOVE_POST = "REMOVE_POST"

export const receiveAllPosts = posts => ({
  type: RECEIVE_POSTS,
  posts
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
  PostAPIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const getPost = postId => dispatch => (
  PostAPIUtil.getPost(postId).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const getAllPosts = () => dispatch => (
  PostAPIUtil.getPostIndex().then(posts => (
    dispatch(receiveAllPosts(posts))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const getAllPostsByUserId = userId => dispatch => (
  PostAPIUtil.getUsersPosts(userId).then(posts => (
    dispatch(receiveAllPosts(posts))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const editPost = post => dispatch => (
  PostAPIUtil.editPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId).then(() => (
    dispatch(removePost(postId))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)
