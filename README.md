# Задание 1

Создатþ приложение на React длā отображениā случайнýх шуток о Чаке Норрисе.
Мý будем исполþзоватþ Chuck Norris API, которýй предоставлāет случайнýе шутки о Чаке Норрисе. Этот
API не требует клĀча длā доступа, что делает его идеалþнýм длā обучениā.
Инициализируйте новýй проект с помощþĀ Create React App.
Разработайте интерфейс с кнопкой, при нажатии на которуĀ будет отправлāтþсā запрос к API длā
получениā новой шутки.
Исполþзуйте fetch вместе с Promise или async/await длā вýполнениā запроса к Chuck Norris API и получениā
случайной шутки.
Отобразите полученнуĀ шутку в вашем интерфейсе. Можете добавитþ какой-нибудþ ÿлемент анимации или
визуализации при загрузке даннýх.

# Задание 2

Разработать приложение на React, которое позволит пользователю конвертировать заданное количество
рублей (RUB) в выбранную иностранную валюту по актуальному курсу

1. Создайте новый проект
2. Выбираем любой доступный API или https://www.exchangerate-api.com/
3. В интерфейсе должно быть минимум три элемента управления:
a. Поле ввода для указания количества рублей (RUB), которые пользователь хочет
конвертировать.
b. Поле ввода для указания кода целевой валюты (например, USD, EUR).
c. Кнопка для выполнения операции конвертации.
4. URL запроса к API `https://v6.exchangerate-api.com/v6/Ваш Ключ/latest/RUB`;
5. Пользователь может ввести количество рублей и код целевой валюты, нажать на кнопку и увидеть
результат конвертации.

# Задание 3*

Разработать приложение для управления каталогом продуктов, позволяющее добавлять, удалять,
отображать и редактировать продукты.

1. Настройка Redux Store:

a. Используйте configureStore из @reduxjs/toolkit для создания хранилища.

b. Определите начальное состояние и создайте слайс с использованием createSlice для
продуктов. Каждый продукт должен иметь id, name, description, price, и available.

c. В слайсе определите редьюсеры и действия для добавления нового продукта, удаления
продукта по ID, обновления продукта и изменения его доступности.

2. Компоненты React:

a. Компонент для добавления продукта: Создайте форму, позволяющую пользователям
вводить данные нового продукта (имя, описание, цена, доступность) и добавлять его в
каталог.

b. Компонент для отображения продуктов: Разработайте компонент, который отображает
список всех продуктов с их атрибутами, а также кнопки для удаления продукта из
каталога и переключения его доступности.

c. Компонент для редактирования продукта: Опционально, предоставьте возможность
редактирования существующих продуктов, чтобы можно было изменять их имя,
описание, цену и доступность.