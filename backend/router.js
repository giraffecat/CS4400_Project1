// router.js

// 引入express并且获取路由对象
const app = require('express')
const moment = require('moment')

const router = app.Router()
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost', // 服务器地址
    user: 'root', // mysql用户名称
    password: 'zh1998501', // mysql用户密码
    port: '3306', // 端口
    database: 'bank_management', // 数据
  });

var db = require('./db.js')

// 解决跨域
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 配置路由对象
router.get('/login',(req,res)=>{
    res.send('主页')
})

router.post('/login',(req,res)=>{
    // res.setHeader('Access-Control-Allow-Origin', '*')

    console.log("account",req.body.account, req.body.password);
    let query = `SELECT perID, pwd, role from
    (SELECT person.perID, pwd, "admin" as role FROM person join system_admin on person.perID = system_admin.perID 
    UNION SELECT person.perID, pwd, "manager" as role FROM person join bank on person.perID = bank.manager 
    UNION SELECT person.perID, pwd, "customer" as role FROM person join customer on person.perID = customer.perID) as tb1 
    where tb1.perID = "${req.body.account}" and tb1.pwd = "${req.body.password}"`
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/EmployeeStats',(req,res)=>{
    let query = `select * from display_employee_stats`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/AccountStats',(req,res)=>{
    let query = `select * from display_account_stats;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})


router.get('/CorporationStats',(req,res)=>{
    let query = `select * from display_corporation_stats;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/BankStats',(req,res)=>{
    let query = `select * from display_bank_stats;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/CustomerStats',(req,res)=>{
    let query = `select * from display_customer_stats;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/GetAccounts',(req,res)=>{
    let query = `select accountID from bank_account;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.post('/GetAccounts',(req,res)=>{
    let query = `select accountID from access where perID = "${req.body.LoginPerson}";`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/GetCustomers',(req,res)=>{
    let query = `select * from customer;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

// router.get('/GetBanks',(req,res)=>{
//     let query = `select bankID from bank;`;
//     let promise = new Promise(function(resolve, reject) {
//         db.query(query, [], function (results, fields) {
//             // 以json的形式返回
//             //判断是不是admin
//             resolve(results)
//         })
//     }).then(data => {
//         res.json(data)
//     })
// })

router.post('/GetBanks',(req,res)=>{
    console.log("account",req.body.LoginPerson);
    let query = `select bankID from access where perID = "${req.body.LoginPerson}";`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})



router.post('/Deposit',(req,res)=>{
    console.log("account",req.body);
    var promise = new Promise(function(resolve, reject){
        let time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let query = `call account_deposit("${req.body.PersonID}", ${req.body.Amount}, "${req.body.BankID}", "${req.body.AccountID}", "${time}");`;        
        connection.query(query, function (err, result) {
        if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
    }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/Withdraw',(req,res)=>{
    console.log("account",req.body);
    var promise = new Promise(function(resolve, reject){
        let time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let query = `call account_withdrawal("${req.body.PersonID}", ${req.body.Amount}, "${req.body.BankID}", "${req.body.AccountID}", "${time}");`;        
        connection.query(query, function (err, result) {
        if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
    }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.get('/register',(req,res)=>{
    res.send('注册')
})

router.post('/createCorp',(req,res)=>{
    console.log("corporation",req.body.corpID, req.body.corpLN, req.body.corpSN, req.body.corpAssets);
    // let query = `insert into corporation values ("${req.body.corpID}", "${req.body.corpLN}", "${req.body.corpSN}", "${req.body.corpAssets}");`;
    var promise = new Promise(function(resolve, reject){
        var query = `insert into corporation values ("${req.body.corpID}", "${req.body.corpLN}", "${req.body.corpSN}", "${req.body.corpAssets}");`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
      })
})
// router.post('/customerManageAccount',(req,res)=>{
//     // res.setHeader('Access-Control-Allow-Origin', '*')
//     let query = `SELECT accountID from access;
//     SELECT perID from customer;`
//     let promise = new Promise(function(resolve, reject) {
//         db.query(query, [], function (results, fields) {
//             // 以json的形式返回
//             resolve(results)
//         })
//     }).then(data => {
//         res.json(data)
//     })
// })

// 导出路由对象
module.exports = router
