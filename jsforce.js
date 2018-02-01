/* jshint esversion: 6, asi: true, laxcomma: true, laxbreak: true */

const fs = require('fs')
const jsforce = require('jsforce')

const connect = new Promise((resolve, reject) => {
    
    //get un pw token from creds.js
    

    const instanceUrl = 'https://login.salesforce.com'
    const creds = password + token

    const conn = new jsforce.Connection({
        instanceUrl
    });

    conn.login(username, creds, (err, userInfo) => {
        if (err) {
            reject(err)
        }
        else {       
            resolve(conn)
        }
    })
})
const deploy = (conn, filepath) => {
    return new Promise((resolve, reject) => {

        var fs = require('fs');
        var zipStream = fs.createReadStream(filepath);
        conn.metadata.deploy(zipStream, { rollbackOnError: true })
            .complete((err, result) => err ? reject(err) : resolve(result) )
    })
}

connect.then(conn => {

    console.log(`Connection URL ${conn.instanceUrl}`)
    console.log(`Connection Token ${conn.accessToken}`)

    const path = 'C:\\\\Users\\dubya\\Desktop\\New folder\\creations\\package.zip'

    deploy(conn, path)
        .then(result => {
            console.log('done ? :' + result.done);
            console.log('success ? : ' + result.true);
            console.log('state : ' + result.state);
            console.log('component errors: ' + result.numberComponentErrors);
            console.log('components deployed: ' + result.numberComponentsDeployed);
            console.log('tests completed: ' + result.numberTestsCompleted);
        })
        .catch(e => console.error(e))

})