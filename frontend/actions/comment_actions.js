import * as CommentAPIUtil from '../util/comments_api_util'
import { receiveUserErrors } from './user_actions'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

// export const receiveAllComments = comments => ({
//   type: RECEIVE_COMMENTS,
//   comments
// })

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const removeComment = comment =>  ({
  type: REMOVE_COMMENT,
  comment
})

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const editComment = comment => dispatch => (
  CommentAPIUtil.editComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId).then(comment => (
    dispatch(removeComment(comment))
  ), err => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
)
