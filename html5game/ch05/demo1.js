//����httpģ��
var http = require("http");
//����Web������
var server = http.createServer(function(req,res){
   //д��Ӧͷ	 
   res.writeHead(200,{'Content-Type':'text/plain'});
   //��������
   res.write("Hello,Node.js!");
   //����
   res.end();
});
//��������
server.listen(8888,"localhost");