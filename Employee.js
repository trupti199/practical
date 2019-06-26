var express=require('express');
var app=express();


var Employeecontroller=function(req,resp)
{
	var Employee=[
	{id:1,name:'trupti',sal:25000,designation:'manager'},
	{id:2,name:'rahul',sal:15000,designation:'developer'},
	{id:3,name:'Megha',sal:15000,designation:'developer'},
	{id:4,name:'Shweta',sal:18000,designation:'testing'},
	
	];
	
	resp.send(Employee);
};
app.get('/Employee',Employeecontroller);

	var server=app.listen(8081,function (){
	var host=server.address().address;
	var port=server.address().port;
	console.log("server is listening on port localhost:8081",host,port);
	});

