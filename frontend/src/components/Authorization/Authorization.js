import Form from '../Form/Form';
import Input from '../Input/Input';
import Title from '../Title/Title';
import classes from './Authorization.module.css';
import useForm from '../../hooks/useForm';

const Authorization = ({ onLogin, errorMessage }) => {
   const { values, handleChange, resetForm, errors, isValid } = useForm();

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (!values.password || !values.email) {
         return;
      }
      onLogin(values);
      resetForm()
   }
   return (
      <section className={classes.authorization}>
         <div className={classes.authorization__container}>

            <Title title='Вход' position='true' />
            <Form
               name='authorization'
               text='Войти'
               onSubmit={handleSubmit}
               disabled={!isValid}
               errorMessage={errorMessage}
            >
               <Input
                  name='email'
                  placeholder='Логин (введите email)'
                  type='text'
                  required
                  autoComplete='email'
                  value={values.email || ''}
                  error={errors.email || ''}
                  onChange={handleChange}
                  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
               />
               <Input
                  name='password'
                  placeholder='Пароль'
                  type='password'
                  required
                  autoComplete='password'
                  value={values.password || ''}
                  error={errors.password || ''}
                  onChange={handleChange}
               />
            </Form>
         </div>
      </section>
   )
}

export default Authorization;