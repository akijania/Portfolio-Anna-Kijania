/* selectors */
export const getAllPosts = ({ posts }) => posts;
export const getProjectById = ({ posts }, id) => {
  const filtered = posts.filter(product => product.id === id);
  return filtered.length ? filtered[0] : { error: true };
};
export const getCountPosts = ({ posts }) => posts.length;

/* action name creator */

/* action types */

/* action creator */

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
