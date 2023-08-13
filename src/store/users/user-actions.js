export const ADD_USER = 'ADD_USER';

export const addUsers = (users) => ({
    type: ADD_USER,
    payload: users
})

export const loadUsers = () => (dispatch, _, client) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => dispatch(addUsers(users)));
}