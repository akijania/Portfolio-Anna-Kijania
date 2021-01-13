import PropTypes from 'prop-types';
import React from 'react';

import LastPost from '../../common/LastPost/LastPost';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import styles from './LatestProjects.module.scss';

class LatestProjects extends React.Component {
  state = {
    activePage: 0,
    manualPageChange: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage, manualPageChange: true });
  }

  handleLeftAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else {
      this.setState({ activePage: activePage + 1 });
    }
  };

  handleRightAction = () => {
    const { activePage, manualPageChange } = this.state;
    if (manualPageChange) {
      this.setState({ manualPageChange: false });
    } else if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  };

  render() {
    const { posts } = this.props;
    const { activePage } = this.state;

    const itemsPerPage = 3;

    const pagesCount = Math.ceil(posts.length / itemsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <button
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </button>
        </li>
      );
    }
    const swipeContent = [];
    for (let page = 0; page < pagesCount; page++) {
      swipeContent.push(
        <div className='row'>
          {posts
            .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
            .map(item => (
              <div key={item.id} className={`col-md-12 col-lg-4`}>
                <LastPost key={item.id} {...item} />
              </div>
            ))}
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-11 ' + styles.heading}>
                <h3>Projects</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>

          <SwipeComponent
            activePage={this.state.activePage}
            rightAction={this.handleRightAction}
            leftAction={this.handleLeftAction}
          >
            {swipeContent}
          </SwipeComponent>
        </div>
      </div>
    );
  }
}

LatestProjects.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      comments: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default LatestProjects;
