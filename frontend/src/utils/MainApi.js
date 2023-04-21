import { checkResponse, BASE_URL } from './constants';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

// Получаем все сохраненные задачи пользователя
export const getAllTask = (jwt) => {
  return fetch(`${BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    }
  }).then((res) => checkResponse(res))
};

//Dобавим новую задачу
export const addNewTask = (data, id, jwt) => {
  return fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      heading: data.heading,
      description: data.description,
      director: id,
      employee: data.employee,
      priority: data.priority,
      status: data.status,
      dateCreation: new Date(),
      dateUpdate: new Date(),
      deadline: data.deadline,
    }),
  })
    .then((res) => checkResponse(res));
}

// Обновляем задачу
export const updateTask = (data, jwt) => {
  return fetch(`${BASE_URL}/tasks`, {
    method: 'PATCH',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      heading: data.heading,
      description: data.description,
      director: data.director,
      responsible: data.responsible,
      priority: data.priority,
      status: data.status,
      dateCreation: data.dateCreation,
      dateUpdate: data.dateUpdate,
      deadline: data.deadline,
    }),
  }).then((res) => checkResponse(res))
};
//Получим сотрудников
export const getEmployee = (jwt, userId) => {
  return fetch(`${BASE_URL}/employee/${userId}/subordination`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${jwt}`,
    }
  }).then((res) => checkResponse(res))
};


