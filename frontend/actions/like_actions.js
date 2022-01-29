import * as LikeAPIUtil from '../util/likes_api_util'
import { receiveErrors } from './session_actions'


export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const removeLike = likeId =>  ({
  type: REMOVE_LIKE,
  likeId
})

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like).then(like => (
    dispatch(receiveLike(like))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const getLike = likeId => dispatch => (
  LikeAPIUtil.getLike(likeId).then(like => (
    dispatch(receiveLike(like))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const deleteLike = likeId => dispatch => (
  LikeAPIUtil.deleteLike(likeId).then(() => (
    dispatch(removeLike(likeId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)
