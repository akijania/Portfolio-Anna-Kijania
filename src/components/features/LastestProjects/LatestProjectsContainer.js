import { connect } from 'react-redux';

import { getAllPosts } from '../../../redux/postsRedux';

import LatestProject from './LatestProjects';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(LatestProject);
