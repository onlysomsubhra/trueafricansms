# True African SMS Gateway API for Uganda

## Install

```bash
npm install trueafricansms --save
```

## Test
```bash
npm test
```

## Basic Usage

```javascript
//import library
const trueafrican = require('trueafricansms');

//get data from database or ...
const Username = 'xxxx'; // true african client username
const Password = 'xxxx'; // true african client password
const PhoneNumber = '256xxxxxxxxx'; // to mobile number or msisdn number
const Message = 'npm test super agent'; // sms text message

const obj = {
    username: Username,
    password: Password,
    msisdn: PhoneNumber,
    message: Message
};

//send sms
new Promise((resolve, reject) => {
    trueafrican(obj)
    .then(res => {
        //console.log('success: ',res);
        resolve(true);        
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});
```


### Expected ouput

```
{
    response: 'json response from true african end' 
}
```
