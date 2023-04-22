import { format, isAfter } from 'date-fns';
export const BASE_URL = 'http://localhost:3001';

export const escKeyCode = 'Escape';

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const forToday = (arr) => {
  return arr.filter((i) => {
    const todayDay = format(new Date(), 'yyy-MM-dd');
    return i.deadline === todayDay
  })
}

export const forWeek = (arr) => {
  return arr.filter((i) => {
    const day = format(new Date(new Date(new Date().setDate(new Date().getDate() + 7))), 'yyy-MM-dd');
    const result = isAfter(new Date(i.deadline), new Date(day))
    return !result
  })
}

export const moreThanWeek = (arr) => {
  return arr.filter((i) => {
    const day = format(new Date(new Date(new Date().setDate(new Date().getDate() + 7))), 'yyy-MM-dd');
    const result = isAfter(new Date(i.deadline), new Date(day))
    return result
  })
}

export const byResponsible = (arr, id) => {
  return arr.filter((i) => {
    return i.director === id
  })
}

export const withoutSorting = (arr, id) => {
  return arr.filter((i) => {
    return i
  })
}

export const start = (arr, id) => {
  return arr.filter((i) => {
    return i
  })
}


