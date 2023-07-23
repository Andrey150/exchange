# Getting Started with Create React App

Проект создан с помощью React и TypeScript.

Чтобы запустить проект потребуется установить yarn глобально, так же устновить node_modules с помощью команды:

### `yarn install`

## Available Scripts

Для запуска, в директории проекта потребуется ввести команду:

### `yarn start`

Чтобы запустть локальный сервер нужноо ввести команду: 

### `yarn build`

Далее 
### `yarn global add serve`
### `serve -s build`

Для корректной работы приложения потребуется включить vpn в браузере, т.к выбранное api блокирует запросы.
Если будет исчерпан лимит запросов, то потребуется пройти регистрацию на сайте 
[http://api.apilayer.com/exchangerates_data/](http://api.apilayer.com/exchangerates_data/), быть залогиненым на этом сайте
и заменить apikey в файле "./src/api.js"

# Некоторые решения в проекте были приняты в связи с особенностями api

