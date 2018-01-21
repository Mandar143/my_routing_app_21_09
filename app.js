const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use((req, res, next) => {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

app.get(
    '/',
    (req, res) => res.send('Hello World!')
)

app.get(
    '/calcv1/:num1/:num2',
    (req, res) => {
        console.log(req.params)
        res.send(`Addition of ${req.params['num1']} and 
        ${req.params['num2']} is ${parseInt(req.params['num1']) + parseInt(req.params['num2'])} `)
    }
)

app.post(
    '/calcv2',
    (req, res) => {
        console.log(req.body)
        let custRes = {}
        if (req.body.operation === '+') {
            custRes = {
                sts: 200,
                msg: 'addition',
                res: (parseInt(req.body.num1) + parseInt(req.body.num2))
            }
        }
        else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
        }
        res.json(custRes)
    }
)


app.post(
    '/login',
    (req, res) => {
        console.log(req.body)
        let custRes = {}
        var MongoClient = require('mongodb').MongoClient
            MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
            if (err) throw err
            
            else{
                db.collection('m_user').find({"username":req.body.usNm},function (err, result) {
                    if (err) throw err
                    else {
                        
                        if (req.body.usNm === result.username) {
                            custRes = {
                                sts: 200,
                                msg: 'login successfully',
                                res: req.body.usNm
                            }
                        }
                        else {
                            custRes = {
                                sts: 400,
                                msg: 'error',
                                res: 0
                            }
                        }
                       
                    }
                    res.json(custRes)
                    db.close()
  
                })
            }
            })
        
    }
)


app.post(
    '/register',
    (req, res) => {
        console.log(req.body)
        let custRes = {}
        var MongoClient = require('mongodb').MongoClient
            MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
            if (err) throw err
            
            else{
                db.collection('m_user').insertOne(req.body,function (err, result) {
                    if (err) throw err
                    else {
                        
                        if (result) {
                            custRes = {
                                sts: 200,
                                msg: 'Save successfully',
                                res: req.body.name
                            }
                        }
                        else {
                            custRes = {
                                sts: 400,
                                msg: 'error',
                                res: 0
                            }
                        }
                       
                    }
                    res.json(custRes)
                    //db.close()
  
                })
            }
            })
        
    }
)



app.get(
    '/state',
    (req, res) => {
        console.log(req.body)
        let custRes = {}
        var MongoClient = require('mongodb').MongoClient
            MongoClient.connect('mongodb://localhost:27017/mydb', function (err, db) {
            if (err) throw err
            else{
                db.collection('m_state').find().toArray(function (err, result) {
                    if (err) throw err
                    else {
                        if (result) {
                            res.json(result)
                            db.close()
                        }
                       
                    }
                    
  
                })
            }
            })
        
    }
)
 
 
app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)