export const POSTS_ACTIONS = {
    SET_IS_LOADING_FETCH_POSTS: "SET_IS_LOADING_FETCH_POSTS",
    FETCH_POSTS: "FETCH_POSTS",
    SET_POSTS: "SET_POSTS", 
  };
  
  export const setIsLoadingFetchPosts = isLoading => {
    return {
      type: POSTS_ACTIONS.SET_IS_LOADING_FETCH_POSTS,
      payload: isLoading,
    };
  };
  
  export const setPostsAction = posts => {
    return {
      type: POSTS_ACTIONS.SET_POSTS,
      payload: posts,
    };
  };
  
  export const fetchPostsAction = () => {
    return async dispatch => {
      try {
        dispatch(setIsLoadingFetchPosts(true));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        dispatch(setPostsAction(data.slice(0, 10)));
      // eslint-disable-next-line no-unused-vars
      } catch (error) { /* empty */ } finally {
        dispatch(setIsLoadingFetchPosts(false));
      }
    };
  };