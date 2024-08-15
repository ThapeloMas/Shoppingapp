// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Login from "./components/Login";
import Register from "./components/Register";
import ShoppingList from "./components/ShoppingList";
import ListManager from "./components/ListManager";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Shopping List App</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute>
                  <div>
                    <ListManager />
                    <ShoppingList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
