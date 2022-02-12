import React from "react";
import fp from "lodash/fp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainPage, Error404Page } from "pages";

const Routers = () => {
  var baseRouteUrl = "/";
  if (window.location.pathname.includes(`en-US`)) {
    baseRouteUrl = "/en-US/";
  } else if (window.location.pathname.includes(`ko-KR`)) {
    baseRouteUrl = "/";
  }
  const menu = [
    {
      path: baseRouteUrl,
      element: <MainPage />,
    },
    {
      path: "*",
      element: <Error404Page />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {fp.map(
          (item) => (
            <Route
              key={fp.pipe(fp.get(`element`), fp.toString)(item)}
              path={fp.pipe(fp.get(`path`), fp.toString)(item)}
              element={fp.pipe(fp.get(`element`))(item)}
            />
          ),
          menu
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
