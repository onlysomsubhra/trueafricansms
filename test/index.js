const trueafrican = require('../index');

const Username = 'rontuval'; //'xxxx';
const Password = 'Rtuval678#'; //'xxxx';
const PhoneNumber = '256779043988';
const Message = 'Plz confirm your no dominic, i will test for uganda';

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