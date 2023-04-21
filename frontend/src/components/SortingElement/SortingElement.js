import classes from './SortingElement.module.css';

const SortingElement = ({ role, onFilter, sortTasks }) => {
  console.log(sortTasks)
  return (
    <select
      className={classes.sort}
      value={sortTasks}
      onChange={onFilter}
    >
      <option
        className={classes.sort__item}
        disabled
        value='default'
      >
        Сортировать
      </option>
      <option value='withoutSorting'>Без сортировки</option>
      <option value='forToday'>На сегодня</option>
      <option value='forWeek'>На неделю</option>
      <option value='moreThanWeek'>Более недели</option>
      <option
        value='byResponsible'
        disabled={role ? false : true}>
        По ответственным
      </option>
    </select>
  )
}

export default SortingElement;
