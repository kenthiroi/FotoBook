import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectAllPosts } from '../../reducers/selectors/posts_selector';
import PostIndex from './postIndex';


const mapStateToProps = state => ({
  posts: selectAllPosts(state),
  users: state.entities.user,
})

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(getAllPosts()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);