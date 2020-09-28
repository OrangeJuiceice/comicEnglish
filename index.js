//express
var express = require('express');
var app = express();

//初始化
//bodyparser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
//handlebars
var handlebars = require("express-handlebars");
app.engine("handlebars",handlebars({defaultLayout:false}));
app.set('view engine','handlebars');
//数据库
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./db.sqlite3");
//静态文件
app.use(express.static('public'));
var path = require("path");
//session
var session = require("express-session");
app.use(
    session({
        secret:"some secret code",
        resave:false,
        saveUninitialized:false
    })
)

//根页面
app.get("/",function(req,res){
    res.render("index")
});
//开始
app.get("/start",function(req,res){
if(!req.session['username']){
        res.render("login");
    }
    else{
        res.render("level",{'user':req.session['username']})
        
    }
})
//登录
app.post("/login",function(req,res){
    var username = req.body['username'];
    var password = req.body['password'];
    db.get("SELECT * FROM user WHERE username = ? AND password=?",[username,password],function(err,row){
        console.log(err);
        if(row){
            req.session['username']=username;
            res.redirect("back")
        }else{
        var alert='<script>alert("账号或密码错误");history.back()</script>'
        res.send(alert)
        }
    })
})
//注册
app.post("/register",function(req,res){
    var username=req.body['username']
    var password = req.body['password'];
    db.run("INSERT INTO user(username,password) VALUES(?,?)",[username,password],function(err){
        console.log(err)
        var alert='<script>alert("注册成功，请重新登录");history.back()</script>'
        res.send(alert)
        
    })
});

app.get("/easy",function(req,res){
    res.render("word_easy",{'user':req.session['username']})
})

app.get("/medium",function(req,res){
    res.render("word_middle",{'user':req.session['username']})
})

app.get("/hard",function(req,res){
    res.render("word_hard",{'user':req.session['username']})
})

app.get("/comics_easy",function(req,res){
    res.render("game1",{'user':req.session['username']})
})

app.get("/comics_middle",function(req,res){
    res.render("game2",{'user':req.session['username']})
})

app.get("/comics_hard",function(req,res){
    res.render("game3",{'user':req.session['username']})
})

app.get("/writing",function(req,res){
    if(!req.session['username']){
        res.render("login");
    }
    else{
        res.render("write",{'user':req.session['username']})
    }
})

app.post("/submit",function(req,res){
    var content = req.body["diary"]
    db.run("INSERT INTO opinions(name,content) VALUES(?,?)",[req.session["username"],content],function(err){
        console.log(err)
        var alert='<script>alert("提交成功，单击右上角用户名可查看您的笔记记录");window.location.href= "/start" </script>'
        res.send(alert)
    })
})

app.get("/record",function(req,res){
    if(!req.session['username']){
        res.render("login");
    }
    else{
        db.all('SELECT * FROM opinions WHERE name=?',req.session["username"],function(err,rows){
            console.log(err);
            res.render("records",{
                "rows":rows,
                "username":req.session["username"]
        })
        })
    }
})





app.listen(8000,function(){
    console.log("listening on port 8000!");
})
