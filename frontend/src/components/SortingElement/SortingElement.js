import React, { useState } from 'react';
import classes from './SortingElement.module.css';

const SortingElement = () => {
   const [sortTasks, setSortTasks] = useState('default');

   const handleChangeSortTasks = (evt) => {
      setSortTasks(evt.target.value)
   }

   return (
      <select
         className={classes.sort}
         value={sortTasks}
         onChange={handleChangeSortTasks}
      >
         <option
            className={classes.sort__item}
            disabled
            value='default'>
            Сортировать
         </option>
         <option value='today' data-sort='date:today'>На сегодня</option>
         <option value='week' data-sort='date:week'>На неделю</option>
         <option value='long-time' data-sort='date:long-time'>Более недели</option>
         <option value='responsible' data-sort='sort:responsible'>По ответственным</option>
      </select>
   )
}

export default SortingElement;
