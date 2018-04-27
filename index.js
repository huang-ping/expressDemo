var express = require('express');
var app = express();


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/src/" + "index.html" );
})
 
app.get('/rpc/*', function (req, res) {
   // 输出 JSON 格式
   var response = {
       success: true,
       data: test(req.query.a, req.query.b)
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})



function test(a,b){
  var list = []
  for(var i = 0; i< 10; i++){
    list.push({
      name: a+'-'+b,
      key: i
    })
  }
  return list
}