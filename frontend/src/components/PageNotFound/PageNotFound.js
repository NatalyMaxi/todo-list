import { Link } from 'react-router-dom';
import classes from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={classes.pageNotFound}>
      <div className={classes.pageNotFound__container}>
        <h2 className={classes.pageNotFound__title}>404</h2>
        <p className={classes.pageNotFound__text}>Страница не найдена</p>
        <Link className={classes.pageNotFound__link} to={-1}>
          Назад
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
