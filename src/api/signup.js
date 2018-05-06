import {post} from 'axios';


export const apiPostSignUp = (entity) =>
    new Promise((resolve, reject) => {
        post('http://integrate-backend-staging.herokuapp.com/register', entity).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error.response)
            })
    })

