const trueafrican = require('../index');

const Username = 'xxxx';
const Password = 'xxxx';
const PhoneNumber = '256xxxxxxxxx';
const Message = 'test message from true african api';

const obj = {
    username: Username,
    password: Password,
    msisdn: PhoneNumber,
    message: Message
};

new Promise((resolve, reject) => {
    trueafrican(obj)
    .then(res => {
        if(res.type == 'error'){
            console.log('error: ', res);
            //return;
            resolve(false);
        } else {
            console.log('success: ',res);
            resolve(true);
        }
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});