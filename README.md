# todo-list
## Проект: ![Todo-list](/frontend/src/images/logo.png)
![](/frontend/src/images/preview.png)
## :speech_balloon: Краткое описание:
Приложение, интерактивная SPA-страница, пользователь которого сможет планировать свою деятельность и контролировать работу своих подчиненных при помощи механизма управления задачами.
Репозиторий для приложения проекта Todo-list, включает фронтенд и бэкенд части. Бэкенд расположен в директории backend/, а фронтенд - в frontend/.

### :page_with_curl: Функциональные возможности проекта:

  -  Авторизация пользователей по введенному email и паролю.  
  -  Пароли пользователей х-ранятся в зашифрованном виде;   
  -  •	Информация хранится в Компактная встраиваемая СУБД SQLite;  
  -  Добавление новых задач при клике на кнопку "добавить". Происходит открытие модального окна для ввода данных о задаче;
 -  Все поставленные задачи отображаются в общем списке задач;
  -  Задачу может добавить только пользователь- руководитель;
  -  Пользователь не может указать в качестве ответственного задачи другого пользователя, который не является его подчиненным;
   -  Заголовки незавершенных задач с датой окончания < текущая дата отображаются красным цветом. Заголовки завершенных задач отображаются зеленым цветом. Остальные - серым.
  -  На странице можно произвести сортировку задач; 
  -  Сортировка задач с группировкой по дате завершения(на сегодня, на неделю, на будущее,  без сортировки);
  -  Сортировка задач группировкой по ответственным (режим просмотра для руководителя);
  -  Можно сортировать отображение задач; 


### :computer: Стек технологий:

React <img src="https://img.icons8.com/ultraviolet/38/000000/react--v1.png" alt="React" width="20" height="20"/>  
JavaScript <img src="https://img.icons8.com/color/38/000000/javascript--v1.png" alt="JS" width="20" height="20"/>  
Node.js <img src="https://img.icons8.com/color/38/000000/nodejs.png" alt="Node.js" width="20" height="20"/>  
JSX <img src="https://media.united.com/images/Media%20Database/SDL/MileagePlus%20Partners/jsx-logo.jpg" alt="JSX" width="20" height="20"/>  
Express.js <img src="https://avatars.mds.yandex.net/i?id=6f1a6bf3db1406597d918db19cb8178d021c1ece-7662747-images-thumbs&n=13&exp=1" alt="Express.js" width="20" height="20"/>  
SQLite <img src="https://logosdownload.com/logo/sqlite-logo-big.png" width="20" height="20"/>  
Sequelize <img src="https://kvcvc.gallerycdn.vsassets.io/extensions/kvcvc/sequelize-snippets/1.0.0/1611441255791/Microsoft.VisualStudio.Services.Icons.Default" width="20" height="20"/>  
CSS3 <img src="https://img.icons8.com/stickers/2x/css3.png" alt="CSS3" width="20" height="20"/>  
Flexbox <img src="https://avatars.mds.yandex.net/i?id=e1901bd3569a85ebdc91cec3b392a061-5234049-images-thumbs&n=13&exp=1" alt="Flexbox" width="20" height="20"/>  
Grid Layout <img src="https://avatars.mds.yandex.net/i?id=a279ee76ee07008dde73bc99de8b09a030da93f0-4162430-images-thumbs&n=13&exp=1;" width="20" height="20"/>  
date-fns :clock2: библиотека для управления датами :date:  
GitHub <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  alt="GitHub" width="20" height="20"/>  

### :page_with_curl: Инструкция по разрёртыванию проекта::

```
# клонирование репозитория
git clone https://github.com/NatalyMaxi/todo-list

# Перейти в директорию backend
$ cd backend

# установка зависимостей
$ npm install

# Запуск сервера
$ npm run dev

# Перейти в директорию frontend
$ cd frontend

# установка зависимостей
$ npm install

# Запуск приложения
$ npm run start

```

#### :page_with_curl: Данные для авторизации:  
* Логин руководителя eee@mail.ru пароль eee;  
* Логин пользователя ooo@mail.ru пароль ooo;  


#### :page_with_curl: Планы по доработке проекта:  
* Адаптировать проект под разные разрешения экрана, а так же для мобильной версии;  
* Добавить регистрацию пользователей;  
* Добавить возможность редактировать задачу (пользователи не могут изменять атрибуты задач, созданных их руководителями, кроме статуса);  


###### :link: [Ссылка на репозиторий](https://github.com/NatalyMaxi/todo-list)