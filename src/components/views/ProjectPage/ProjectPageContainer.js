import { connect } from 'react-redux';

import { getProjectById } from '../../../redux/postsRedux';

import ProjectPage from './ProjectPage';

const mapStateToProps = (state, props) => {
  const project = getProjectById(state, props.match.params.project);
  return {
    project,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
