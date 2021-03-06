// router.js

// 引入express并且获取路由对象
const { json } = require('express');
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

router.get('/GetBankAccounts',(req,res)=>{
    let query = `select bankID, accountID from bank_account;`;
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

router.get('/GetBanksList',(req,res)=>{
    let query = `select bankID from bank;`;
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

router.post('/GetEmployeeByBanks',(req,res)=>{
    let query = `select perID from workFor where bankID = "${req.body.BankID}";`;
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

router.post('/GetAccounts',(req,res)=>{
    let query = `select accountID from access where perID = "${req.body.LoginPerson}" and bankID = "${req.body.BankID}";`;
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

router.post('/GetAccountsByID',(req,res)=>{
    let query = `select bankID, accountID from access where perID = "${req.body.LoginPerson}";`;
    console.log(query)
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

router.post('/GetInterestAccountsByBank',(req,res)=>{
    let query = `select interest_bearing.accountID from interest_bearing join bank_account on interest_bearing.accountID = bank_account.accountID and interest_bearing.bankID = bank_account.bankID where interest_bearing.bankID = "${req.body.BankID}";`;
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
router.post('/GetCheckingAccounts',(req,res)=>{
    console.log("GetCheckingAccounts",req.body)
    let query = `select checking.accountID,checking.bankID  from access join checking on access.accountID = checking.accountID and access.bankID = checking.bankID where perID = "${req.body.PersonID}";`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            console.log(results)
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/GetCheckingAccountsList',(req,res)=>{
    console.log("GetCheckingAccounts",req.body)
    let query = `select checking.accountID,checking.bankID from access join checking on access.accountID = checking.accountID and access.bankID = checking.bankID;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            console.log(results)
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.get('/GetSavingAccountList',(req,res)=>{
    console.log("GetSavingAccountList",req.body)
    let query = `select accountID,bankID from savings;`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            console.log(results)
            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.post('/GetSavingAccount',(req,res)=>{
    console.log("GetSavingAccount",req.body)

    let query = `select savings.accountID, savings.bankID from access join savings on access.accountID = savings.accountID and access.bankID = savings.bankID where perID = "${req.body.PersonID}";`;
    let promise = new Promise(function(resolve, reject) {
        db.query(query, [], function (results, fields) {
            // 以json的形式返回
            //判断是不是admin
            console.log(results)

            resolve(results)
        })
    }).then(data => {
        res.json(data)
    })
})

router.post('/GetAccountsList',(req,res)=>{
    let query = `select accountID from access where bankID = "${req.body.BankID}";`;
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


router.post('/AddOverdraft',(req,res)=>{
    console.log("AddOverdraft",req.body)
    var promise = new Promise(function(resolve, reject){
        let query = `call start_overdraft("${req.body.PersonID}", "${req.body.CheckingBankID}", "${req.body.CheckingAccount}", "${req.body.SavingBankID}","${req.body.SavingAccount}");`;
        connection.query(query, function (err, result) {
        if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
        }        
        console.log("start_overdraft",result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
    }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/StopOverdraft',(req,res)=>{
    console.log("StopOverdraft",req.body)
    var promise = new Promise(function(resolve, reject){
        let query = `call stop_overdraft("${req.body.PersonID}", "${req.body.CheckingBankID}", "${req.body.CheckingAccount}");`;
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

router.post('/CreateFee',(req,res)=>{
    console.log("account",req.body);
    var promise = new Promise(function(resolve, reject){
        let query = `call create_fee("${req.body.BankID}", "${req.body.AccountID}", "${req.body.FeeType}");`;        
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

router.post('/Transfer',(req,res)=>{
    console.log("Transfer",req.body);
    var promise = new Promise(function(resolve, reject){
        let time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let query = `call account_transfer("${req.body.PersonID}", ${req.body.Amount}, "${req.body.BankID}", "${req.body.AccountID}", "${req.body.ToBankID}", "${req.body.ToAccountID}","${time}");`;        
        connection.query(query, function (err, result) {
        if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
        }        
        console.log("transfer",result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
    }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.get('/pay',(req,res)=>{
    console.log("pay");
    var promise = new Promise(function(resolve, reject){
        let query = `call pay_employees();`;        
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
          reject("error")
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
      }).catch(error => {
          console.log("error")
        res.end(JSON.stringify(error));
      })
})

router.get('/managerList',(req,res)=>{
    let query = `select perID from employee where perID not in (select manager from bank);`;
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

router.get('/corpList',(req,res)=>{
    let query = `select corpID from corporation;`;
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

router.post('/replaceManager',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        console.log(req.body);
        let query = `call replace_manager("${req.body.EmployeeID}", "${req.body.BankID}", ${req.body.Salary});`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        console.log("replace",result, "-------")
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/AddAccountAccess',(req,res)=>{
    console.log("AddAccountAccess",req.body)
    let param = req.body;
    var promise = new Promise(function(resolve, reject){
        let time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let query = `call add_account_access('${param.LoginPerson}', '${param.Customer}', '${param.AccountType}', '${param.BankID}','${param.AccountIP}', ${param.Balance}, ${param.InterestRate}, null, ${param.MinBalance}, null, ${param.MaxWithdrawals}, '${time}');`;
        console.log("query",query)
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        console.log("add account access",result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/RemoveAccountAccess',(req,res)=>{
    console.log("RemoveAccountAccess",req.body)
    let param = req.body;
    var promise = new Promise(function(resolve, reject){
        let time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let query = `call remove_account_access('${param.LoginPerson}', '${param.Customer}', '${param.BankID}','${param.AccountIP}');`;
        console.log("query",query)
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          res.end(JSON.stringify("error"))
          return;
        }        
        console.log("remove account access",result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/HireWorker',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        console.log(req.body)
        let query = `call hire_worker("${req.body.PersonID}", "${req.body.BankID}", ${req.body.Salary});`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        console.log("hire work",result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/getManagerBank',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        console.log(req.body)
        let query = `select bankID from bank where manager="${req.body.perID}"`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
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

router.post('/StopEmployeeRole',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        console.log(req.body)
        let query = `call stop_employee_role("${req.body.PersonID}");`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        console.log("StopEmployeeRole", result)
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.post('/StopCustomerRole',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        console.log(req.body)
        let query = `call stop_customer_role("${req.body.PersonID}");`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          return;
        }        
        data = result
        console.log("StopCustomerRoleRole", result)

        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    })
})

router.get('/employeeList',(req,res)=>{
    let query = `select perID from employee;`;
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

router.get('/PersonList',(req,res)=>{
    let query = `select perID from person;`;
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


router.get('/customerList',(req,res)=>{
    let query = `select perID from customer;`;
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

router.get('/getPersonList',(req,res)=>{
    let query = `select perID from person;`;
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

router.get('/getBankList',(req,res)=>{
    let query = `select bankID from bank;`;
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

router.post('/createEmployee',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        var query = `insert into employee values ("${req.body.employeeID}", "${req.body.salary}", "${req.body.timeOfPay}", "${req.body.earnings}")`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          reject("error");
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    }).catch(error => {
        console.log("error")
      res.end(JSON.stringify(error));
    })
})

router.post('/createCustomer',(req,res)=>{
    var promise = new Promise(function(resolve, reject){
        var query = `insert into customer values ("${req.body.customerID}")`;
        connection.query(query, function (err, result) {
        if(err){
          console.log('[INSERT ERROR] - ',err.message);
          reject("error");
        }        
        data = result
        resolve(data)  
        // res.end(JSON.stringify(data));
        });
      }).then(data => {
        res.end(JSON.stringify(data));
    }).catch(error => {
        console.log("error")
      res.end(JSON.stringify(error));
    })
})

router.post('/createBank',(req,res)=>{
    console.log("Bank",req.body);
    // let query = `insert into corporation values ("${req.body.corpID}", "${req.body.corpLN}", "${req.body.corpSN}", "${req.body.corpAssets}");`;
    var promise = new Promise(function(resolve, reject){
        var query = `call create_bank("${req.body.bankID}","${req.body.bankName}","${req.body.street}","${req.body.city}","${req.body.stateabbr}","${req.body.zipcode}",${req.body.asset},"${req.body.corpID}","${req.body.manager}","${req.body.employeeID}")`;
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
      }).catch(error => {
        console.log("error")
      res.end(JSON.stringify(error));
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
