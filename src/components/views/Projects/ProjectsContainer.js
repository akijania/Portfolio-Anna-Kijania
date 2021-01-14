import { connect } from 'react-redux';

import { getAllPosts } from '../../../redux/postsRedux';

import Projects from './Projects';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(Projects);
