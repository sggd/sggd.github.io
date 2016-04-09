(function(){
   var http = require("http"),
	   fs = require("fs"),
	   url = require("url");   
   //����HttpServer����
   var HttpServer = function(port)
	  {    	   
	   //��httpģ�鴴����server����
	   this.server = http.createServer(doRequest);
	   //�������󶨵Ķ˿ں�
	   this.port = port;	   	  
	   //���ؾ�̬��Դ
	   function loadStaticResource(request,response)
       {           	
		   //ͨ��url���������е�url����
		   var pURL = url.parse(request.url);
		   var fName = __dirname+pURL.pathname;  
           fs.exists(fName,function(exists){
		      if(exists)
			   {
                  fs.readFile(fName,function(err,data){
					  if(err)
					  {
						 throw err;
					  }
					  else
                      {						 
						  //����mime��������
						  var contentType = "text/html";
						  response.writeHead(200,{"Content-type":contentType});
						  response.write(data);
						  response.end();
					  }  
				  });
			   }
			  else
			   {
                 response.end("404 not found!");
			   }
		   })	
	   }
       //��Ӧ��̬����
	   function doRequest(request,response){				  
	       loadStaticResource(request,response);
	   };	  
   }
   //�趨HttpServer�����start����
   HttpServer.prototype.start=function()
	{		  
	  this.server.listen(this.port);
	  console.log("listen:"+this.port);	  
    }
   //����HttpServer
   var server = new HttpServer(9001);  
   //����server
   server.start();
   console.log(__dirname);
}())