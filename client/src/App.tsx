import React from "react";
import {
  Login,
  Component,
  Issue,
  IssueList,
  IssueDetail,
} from "./pages";
import { useRoutes } from "react-router-dom";

const App: React.FC = () => {
  const element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Login /> },
    {
      path: "component",
      element: <Component />,
    },
    { path: "login", element: <Login /> },
    {
      path: "issue",
      element: <Issue />,
      children: [
        { path: "add", element: <IssueNew /> },
        { path: "list", element: <IssueList /> },
        { path: ":id", element: <IssueDetail /> },
      ],
    },
  ]);
  return element;
};

export default App;
