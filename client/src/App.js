import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";

import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

import { ScrollToTop } from './components/scroll-to-top'

import "./App.css";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <div className="text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<PostsListPage />} />

            <Route path="/404" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:id" element={<Account />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/new-post" element={<CreatePost />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/feed" element={<Feed />} />
            

          </Routes>
        </div>
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}



export default App;
