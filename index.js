const superagent = require('superagent');
const _ = require('lodash');
const xmlParse = require("xml-parse");

const config = {
    username: null, 
    password: null, 
    msisdn: null, 
    message: null, 
    timeout: 5000
}

function create(obj) {
    const url = 'https://mysms.trueafrican.com/v1/api/esme/send';

    const headers = {
        'Content-Type': 'application/json'
    };
    
    obj = Object.assign(config,obj);
    
    let username = obj.username,
        password = obj.password,
        msisdn = obj.msisdn,
        message = obj.message,
        timeout = obj.timeout;

    if (_.isEmpty(username)) {
        throw ("Invalid username");
    }
    if (_.isEmpty(password)) {
        throw ("Invalid password");
    }
    if (_.isEmpty(msisdn)) {
        throw ("Invalid msisdn");
    }
    if (_.isEmpty(message)) {
        throw ("Invalid message");
    }

    const data = {msisdn : [msisdn], message :message, username : username, password : password};

    let response = {};
    return new Promise((resolve, reject) => {
        superagent
            .post(url)
            .send(data) // query string
            .timeout({
                response: timeout,  // Wait 5 seconds for the server to start sending,
                deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
            .set(headers)
            .then((res) => {
                // Get Success
                resolve({'response': res});
            })
            .catch(err => reject(err));
    });
}

module.exports = create;
