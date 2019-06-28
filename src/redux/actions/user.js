import axios from 'axios';

export const get = () => {
  return {
    type: 'GET_USERS',
    payload: axios.get('https://reqres.in/api/users')
  }
}

export const getDeatail = (id) => {
  return {
    type: 'GET_USER',
    payload: axios.get('https://reqres.in/api/users/'+id)
  }
}

export const create = (data) => {
  return {
    type: 'CREATE_USER',
    payload: axios.get('https://reqres.in/api/users', data)
  }
}

export const deletedata = (data) => {
  return {
    type: 'DELETE_USER',
    payload: data
  }
}

export const editdata = (data) => {
  return {
    type:'EDIT_USER',
    payload:data
  }
}
