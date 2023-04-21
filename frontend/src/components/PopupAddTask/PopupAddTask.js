import Popup from '../Popup/Popup';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Select from '../Select/Select';
import SelectionElement from '../SelectionElement/SelectionElement';
import useForm from '../../hooks/useForm'

const PopupAddTask = ({ isOpen, onClose, onAddTask, employees, errorMessage }) => {
  const { values, handleChange, errors, isValid } = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onAddTask(values)
  }
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      <Title title='Добавить задачу' />
      <Form
        name='add-task'
        text='Добавить'
        onSubmit={handleSubmit}
        disabled={!isValid}
        errorMessage={errorMessage}
      >
        <Input
          name='heading'
          placeholder='Заголовок задачи'
          type='text'
          required
          autoComplete='off'
          onChange={handleChange}
          value={values.heading || ''}
          error={errors.heading || ''}
        />
        <Input
          name='description'
          placeholder='Описание задачи'
          type='text'
          required
          autoComplete='off'
          onChange={handleChange}
          value={values.description || ''}
          error={errors.description || ''}
        />
        <Input
          name='deadline'
          placeholder='Дата окончания'
          type="date"
          required
          autoComplete='off'
          onChange={handleChange}
          value={values.deadline || ''}
          error={errors.deadline || ''}
        />
        <Select
          name='employee'
          onChange={handleChange}
          value={values.employees}
        >
          <SelectionElement
            selectionText='ФИО ответственного'
            value=''
            disabled
            required
          />
          {
            employees.map((employee) => {
              return <SelectionElement
                key={employee.user_id}
                selectionText={`${employee.name} ${employee.patronymic} ${employee.surname}`}
                value={`${employee.user_id}`}
              />
            })
          }
        </Select>
        <Select
          name='priority'
          value={values.priority}
          onChange={handleChange}
          required
        >
          <SelectionElement
            selectionText='Приоритет'
            // value='default'
            disabled
          />
          <SelectionElement
            selectionText='Высокий'
            value='Высокий'
          />
          <SelectionElement
            selectionText='Средний'
            value='Средний'
          />
          <SelectionElement
            selectionText='Низкий'
            value='Низкий'
          />
        </Select>
        <Select
          name='status'
          value={values.status}
          onChange={handleChange}
          required
        >
          <SelectionElement
            selectionText='Статус'
            // value='default'
            disabled
          />
          <SelectionElement
            selectionText='В работу'
            value='К выполнению'
          />
          <SelectionElement
            selectionText='Выполняется'
            value='В работу'
          />
          <SelectionElement
            selectionText='Выполнена'
            value='Выполнена'
          />
          <SelectionElement
            selectionText='Отменена'
            value='Отменена'
          />
        </Select>

      </Form>
    </Popup>
  )
}

export default PopupAddTask;
