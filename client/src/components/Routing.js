import React from "react";
import PostsListPage from "../pages/PostsListPage";
import Feed from "../pages/Feed";

const Routing = () => {
  return (
    <React.Fragment>
      {localStorage.getItem("id") ? <Feed /> : <PostsListPage />}
    </React.Fragment>
  );
};

export default Routing;
