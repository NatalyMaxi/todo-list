import Form from '../Form/Form';
import Input from '../Input/Input';
import Title from '../Title/Title';
import classes from './Authorization.module.css';

const Authorization = () => {

   return (
      <section className={classes.authorization}>
         <div className={classes.authorization__container}>

            <Title title='Вход' position='true' />
            <Form
               name='authorization'
               text='Войти'
              // disabled='disabled'//временно
            >
               <Input
                  name='email'
                  placeholder='Логин (введите email)'
                  type='text'
                  required
                  autoComplete='off'
               />
               <Input
                  name='password'
                  placeholder='Пароль'
                  type='password'
                  required
                  autoComplete='off'
               />
            </Form>
         </div>
      </section>
   )
}

export default Authorization;