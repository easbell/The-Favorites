import { fetchData } from './fetch';

export const verifyUser = (data, user) => {
  data.forEach(dataUser => {
    if(dataUser.email === user.email && dataUser.password === user.password) {
      console.log('match!')
    } else if(dataUser.email === user.email && dataUser.password !== user.password) {
      console.log('wrong password!')
    } else {
      console.log('user doesnt exist')
    }
  })
}

