import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route index element={<Dashboard />} />
          <Route path="posts" element={<Post />}>
            <Route index element={<ListPosts />} />
            <Route path="add" element={<AddPost />} />
            <Route path=":id" element={<SinglePost />} />
            <Route path=":id/edit" element={<EditPost />} />
          </Route>
          <Route path="/category" element={<Category />} />
          <Route path="/tags" element={<Tags />} /> */}
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
