import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Select from '../Select/Select';
import SelectionElement from '../SelectionElement/SelectionElement';

const PopupAddTask = ({ isOpen, onClose, onAddTask }) => {
   const [headingTask, setHeadingTask] = useState('');
   const [descriptionTask, setDescriptionTask] = useState('');
   const [deadlineTask, setDeadlineTask] = useState('');
   const [priorityTask, setPriorityTask] = useState('default');
   const [responsibleForTask, setResponsibleForTask] = useState('default');
   const [taskStatus, setTaskStatus] = useState('default');

   const handleChangeTitle = (evt) => {
      setHeadingTask(evt.target.value)
   }
   const handleChangeDescription = (evt) => {
      setDescriptionTask(evt.target.value)
   }
   const handleChangeEndDate = (evt) => {
      setDeadlineTask(evt.target.value)
   }
   const handleChangePriority = (evt) => {
      setPriorityTask(evt.target.value)
   }
   const handleChangeResponsible = (evt) => {
      setResponsibleForTask(evt.target.value)
   }
   const handleChangeStatus = (evt) => {
      setTaskStatus(evt.target.value)
   }

   const handleSubmit = (evt) => {
      evt.preventDefault()
      onAddTask({
         heading: headingTask,
         description: descriptionTask,
         deadline: deadlineTask,
         priority: priorityTask,
         responsible: responsibleForTask,
         status: taskStatus
      })
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
            disabled='disabled'//временно
            onSubmit={handleSubmit}
         >
            <Input
               id='title'
               name='title'
               placeholder='Заголовок задачи'
               type='text'
               required
               autoComplete='off'
               value={headingTask}
               onChange={handleChangeTitle}
            />
            <Input
               id='description'
               name='description'
               placeholder='Описание задачи'
               type='text'
               required
               autoComplete='off'
               value={descriptionTask}
               onChange={handleChangeDescription}
            />
            <Input
               id='end-date'
               name='end-date'
               placeholder='Дата окончания'
               type='text'
               required
               autoComplete='off'
               value={deadlineTask}
               onChange={handleChangeEndDate}
            />
            <Select
               value={responsibleForTask}
               onChange={handleChangeResponsible}
            >
               <SelectionElement
                  selectionText='ФИО ответственного'
                  value='default'
                  disabled
               />

            </Select>
            <Select
               value={priorityTask}
               onChange={handleChangePriority}
            >
               <SelectionElement
                  selectionText='Приоритет'
                  value='default'
                  disabled
               />
               <SelectionElement
                  selectionText='Высокий'
                  value='high'
               />
               <SelectionElement
                  selectionText='Средний'
                  value='medium'
               />
               <SelectionElement
                  selectionText='Низкий'
                  value='low'
               />
            </Select>
            <Select
               value={taskStatus}
               onChange={handleChangeStatus}
            >
               <SelectionElement
                  selectionText='Статус'
                  value='default'
                  disabled
               />
               <SelectionElement
                  selectionText='К выполнению'
                  value='started'
               />
               <SelectionElement
                  selectionText='Выполняется'
                  value='in-progress'
               />
               <SelectionElement
                  selectionText='Выполнена'
                  value='completed'
               />
               <SelectionElement
                  selectionText='Отменена'
                  value='cancelled'
               />
            </Select>
         </Form>
      </Popup>
   )
}

export default PopupAddTask;