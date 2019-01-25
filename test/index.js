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

trueafrican(obj, function(err,res) {
    if(err){
        console.log('error',err);
        return;
    }

    console.log('success',res);
});