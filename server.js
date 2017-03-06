'use strict'

const request = require('request');

//아래 3개는 반드시 자신이 사용할 수 있도록 설정한 것을 바탕으로 해야한다.
let email = '';
let password = '';
let hostname = ''; // webapp 주소

request.post(
    {
        url:`${hostname}/auth/admin`,
        body:{"Content-type":"application/json"}, 
        json:{
            email:email,
            password:password
        }
    }, (error, response, data)=>{

        if(data.result !== 0) {
            console.error('### login fail');
            console.log(data);
        }
        else {
            request.get({
                url:`${hostname}/auth/google/refresh/token`,
                headers : {
                    'Authorization': data.token
                }
            }, (err, res, data)=>{
                console.log(`### refresh _ ${new Date()}`);
                console.log(data);
            })
        }
})