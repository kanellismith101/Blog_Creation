import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);
      case "edit_blogpost":
        return state.map(blogPost => {
          return blogPost.id === action.payload.id ? action.payload : blogPost;
        })
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (name, membership, age, callback) => {
    await jsonServer.post("/blogposts", { name, age, membership });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = dispatch => {
  return async (id, name, membership, age, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {name, age, membership});
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, getBlogPosts, editBlogPost },
  []
);

// removed code

// const addBlogPost = () => {
//   setBlogPosts([
//     ...blogPosts,
//     { title: `Blog Post ${blogPosts.length + 1}` }
//   ]);
// }; EXAMPLE USED WHEN WAS USING setState

//const blogPosts = [{ title: "Blog Post 1" }, { title: "Blog Post 2" }]; EXAMPLE USED ASS DUMMY DATA
