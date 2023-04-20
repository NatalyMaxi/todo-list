import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Authorization from '../Authorization/Authorization';
import PopupAddTask from '../PopupAddTask/PopupAddTask';
import TaskList from '../TaskList/TaskList';
import ProtectedRoute from '../ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [userId, setEUserId] = useState(JSON.parse(localStorage.getItem('user_id')) || {});

  useEffect(() => {
    handleTokenCheck();
    // eslint-disable-next-line
  }, []);
  const handleAddTaskClick = () => {
    setIsAddTaskPopupOpen(true)
    handleGetEmployee(userId)
  }

  const closeAllPopups = () => {
    setIsAddTaskPopupOpen(false)
  };

  // Добавим новую задачу
  const handleAddTaskSubmit = (data) => {
    const jwt = localStorage.getItem('jwt');
    MainApi
      .addNewTask(data, userId, jwt)
      .then((newTask) => {
        console.log(newTask)
        setTasks([newTask, ...tasks]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  };

  // Обновим задачу
  const handleUpdateTask = (data) => {
    const jwt = localStorage.getItem('jwt');
    MainApi
      .updateTask(data, jwt)
      .then((data) => {
        setTasks(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  };

  // Проверим наличие токена
  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    MainApi
      .getUserInfo(jwt)
      .then((data) => {
        setCurrentUser(data)
        setLoggedIn(true);
        navigate('/tasks')
      })
      .catch((err) => {
        console.log(err);
      })
    MainApi
      .getAllTask(jwt)
      .then((res) => {
        setLoggedIn(true);
        setTasks(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  };
  // Авторизация пользователя
  const handleAuthorization = ({ email, password }) => {
    MainApi
      .authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('user_id', res.user_id);
          setEUserId(res.user_id)
          handleTokenCheck()
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setErrorMessage('Неверный email или пароль')
        } else {
          setErrorMessage('Что-то пошло не так...');
        }
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        setCurrentUser(null);
      })
      .finally(() => {
        setTimeout(() => setErrorMessage(''), 3000);
      });
  }

  const handleGetEmployee = (userId) => {
    const jwt = localStorage.getItem('jwt');
    MainApi
      .getEmployee(jwt, userId)
      .then((data) => {
        setEmployees(data.data)

      })
      .catch((err) => {
        console.log('Это ошибка', err)
      })
  }

  const onSignOut = () => {
    localStorage.clear();
    navigate('/signin');
    setLoggedIn(false);
    setCurrentUser({});
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/tasks'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <TaskList
                onAddTask={handleAddTaskClick}
                onSignOut={onSignOut}
                onUpdateTask={handleAddTaskClick}
                tasks={tasks}
                userId={userId}
              ></TaskList>
            </ProtectedRoute>
          }
        />
        <Route
          path='/signin'
          element={<Authorization
            errorMessage={errorMessage}
            onLogin={handleAuthorization}
          />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <PopupAddTask
        isOpen={isAddTaskPopupOpen}
        onClose={closeAllPopups}
        onAddTask={handleAddTaskSubmit}
        onUpdateTask={handleUpdateTask}
        employees={employees}
        errorMessage={errorMessage}
      />
    </CurrentUserContext.Provider>

  );
}

export default App;
