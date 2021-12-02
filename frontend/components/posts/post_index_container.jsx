import {connect} from 'react-redux';
import { getAllPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectAllPosts } from '../../reducers/selectors/posts_selector';
import PostIndex from './post_index';


const mapStateToProps = state => ({
  posts: selectAllPosts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(getAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)