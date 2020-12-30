var initialState = { Allposts: [], currentPost: {} };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        ...{
          Allposts: state.Allposts.concat([action.data]),
        },
      };
    case "DELETE_POST":
      return {
        ...state,
        ...{
          Allposts: state.Allposts.filter((post) => post.id !== action.id),
          currentPost:
            state.currentPost[0].id === action.id ? {} : state.currentPost,
        },
      };
    case "SELECTED_POST":
      return {
        ...state,
        ...{
          currentPost: state.Allposts.filter((post) => post.id === action.id),
        },
      };
    case "UPDATE":
        return {
            ...state,
            ...{
              Allposts: state.Allposts.map((post)=>{
                if(post.id === action.id) {
                  return {
                     ...post,
                     title:action.data.title,
                     body:action.data.body,
                  }
                } else return post;
              })
            },
          };
    default:
      return initialState;
  }
};
export default postReducer;
