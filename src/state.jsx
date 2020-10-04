/* user из базы данных */
const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе...",
    avatar: "https://img.icons8.com/bubbles/2x/user-male.png"
}
const users = {
    0: {name: "Розалия", lastname: "Язина", id:2},
    1: {name: "Агния", lastname: "Крутелева", id:4},
    2: {name: "Венедикт", lastname: "Иньшов", id:8},
    3: {name: "Ульяна", lastname: "Кошечкина", id:9},
    4: {name: "Ростислав", lastname: "Зыков", id:15},
    5: {name: "Андриян", lastname: "Мандрыкин", id:18},
    6: {name: "Илларион", lastname: "Жолдин", id:21},
    7: {name: "Нона", lastname: "Жолдина", id:22},
    8: {name: "Венедикт", lastname: "Жолдин", id:23},
    9: {name: "Лидия", lastname: "Зыкова", id:28},
    10: {name: "Адам", lastname: "Моряев", id:31}
}
export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++)
        if (users[i].id == userId) return users[i];
    return user;
}
export function getUsers(){
    return users;
}