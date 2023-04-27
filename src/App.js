import "./App.css";
import { NewExpense } from "./components/newExpense/NewExpense"
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";
import { useRef } from "react";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { useEffect } from "react";
import { Users } from "./components/users/Users";

function App() {
  const productData = [
    {
      title: "Sirop",
      price: 2000,
      date: new Date(2023, 3, 16),
      id: 1
    },
    {
      title: "Agusha",
      price: 2000,
      date: new Date(2023, 4, 26),
      id: 2

    }, {
      title: "Chupik",
      price: 2000,
      date: new Date(2022, 6, 26),
      id: 3

    }, {
      title: "Privet Kak dela?",
      price: 2000,
      date: new Date(2021, 9, 16),
      id: 4
    }, {
      title: "Avtomat",
      price: 10000,
      date: new Date(2020, 8, 16),
      id: 5
    },
  ];
  const userFromLocal = localStorage.getItem('Users')
  const userArray = userFromLocal ? JSON.parse(userFromLocal) : [];
  const [isLogin, setIsLogin] = useState(false)
  const [showUsers, setShowUsers] = useState(false)
  const [product, setNewProduct] = useState(productData);
  const [usersObject, setUsersObject] = useState(userArray)

  useEffect(() => {
    const localIsLogin = localStorage.getItem('Auth')
    setIsLogin(localIsLogin)
  }, [isLogin])
  const addNewExpensesHandler = (data) => {
    setNewProduct([...product, data]);
  };
  const addNewUserHandler = (userData) => {
    setUsersObject([...usersObject, userData])

  }
  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(usersObject));
  }, [usersObject]);

  function deleteExpenses(id) {
    const newData = product.filter((el) => el.id !== id)
    setNewProduct(newData)
  }
  function loginHandler() {
    setIsLogin(true)
    localStorage.setItem('Auth', !isLogin)
  }
  function logOutHandler() {
    setIsLogin(false)
    localStorage.removeItem("Auth")
  }
  function userOpenHandler() {
    setShowUsers(true)
  }
  function userCloseHandler() {
    setShowUsers(false)
  }
  return (
    <div className="App">
      <Header userOpen={userOpenHandler} userClose={userCloseHandler} onLogout={logOutHandler} isLogin={isLogin} />
      <>
        {isLogin ? (
          <>
            <>
              {showUsers ? (<Users users={usersObject} />) : (
                <div>
                  <NewExpense onSubmit={addNewExpensesHandler} />
                  <Expenses onClick={deleteExpenses} data={product} />
                </div>
              )}

            </>
          </>
        ) : (
          <Login onSubmit={addNewUserHandler} onLogin={loginHandler} />
        )}
      </>


    </div>
  );
}

export default App;