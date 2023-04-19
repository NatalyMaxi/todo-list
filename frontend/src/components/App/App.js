import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authorization from '../Authorization/Authorization';
import PopupAddTask from '../PopupAddTask/PopupAddTask';
import TaskList from '../TaskList/TaskList';
import ProtectedRoute from '../ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = useState(true); //временно
  const [currentUser, setCurrentUser] = useState({});
  const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);

  const handleAddTaskClick = () => {
    setIsAddTaskPopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsAddTaskPopupOpen(false)
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/tasks'
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <TaskList
                onAddTask={handleAddTaskClick}
              ></TaskList>
            </ProtectedRoute>
          }
        />
        <Route
          path='/signin'
          element={<Authorization
          />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <PopupAddTask
        isOpen={isAddTaskPopupOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>

  );
}

export default App;
