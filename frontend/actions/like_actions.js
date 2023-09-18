import * as LikeAPIUtil from '../util/likes_api_util'
import { receiveUserErrors } from './user_actions'


export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const removeLike = like =>  ({
  type: REMOVE_LIKE,
  like
})

export const createLike = like => dispatch => (
  LikeAPIUtil.createLike(like).then(like => (
    dispatch(receiveLike(like))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const getLike = likeId => dispatch => (
  LikeAPIUtil.getLike(likeId).then(like => (
    dispatch(receiveLike(like))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const deleteLike = likeId => dispatch => (
  LikeAPIUtil.deleteLike(likeId).then((like) => (
    dispatch(removeLike(like))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)
