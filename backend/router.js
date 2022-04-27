// router.js

// 引入express并且获取路由对象
const app = require('express')
const router = app.Router()

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

router.post('/employeeStats',(req,res)=>{
    // res.setHeader('Access-Control-Allow-Origin', '*')

    // console.log("account",req.body.account, req.body.password);
    let query = `create or replace view display_employee_s2 as
    select perID,bankID,total_assets
    from workfor,display_bank_stats
    where bankID=bank_identifier;
    create or replace view display_employee_s3 as
    select perID,count(*) as number_of_banks, sum(total_assets) as bank_assets
    from display_employee_s2
    group by perID;
    create or replace view display_employee_stats as
    select bank_user.perID as person_identifier, taxId as tax_identifier,concat(firstName,' ',lastName) as employee_name,birthdate as date_of_birth,dtJoined as joined_system,street,city,state,zip,number_of_banks,bank_assets
    from bank_user left outer join display_employee_s3 on display_employee_s3.perID=bank_user.perID
    where bank_user.perID in (select perID from employee);`
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

router.get('/register',(req,res)=>{
    res.send('注册')
})

// 导出路由对象
module.exports = router
