/*
* pig��
*/
(function(){
  //�������Sprite�̳�
     Pig = Sprite.extend({
     init:function(r)
     {
       //��Ӧbox2d�е���������
       this.b2Obj = null;
	   this._super();
	 },
     //����box2d�е�����
	 createInB2:function()
     {
	   //����ΪԲ��״
       var bodyDef = new b2BodyDef();
	   bodyDef.type = b2Body.b2_dynamicBody;	   
	   //������״
	   var ba = new b2CircleShape(TGame.lenToB2d(this.w*0.5));
	   //��������
	   var fix =  new b2FixtureDef();
	   fix.shape = ba;
	   fix.density =10;
       fix.friction = 0.9;
	   fix.restitution = 0.1;
	   //��������
	   bodyDef.position.Set(TGame.lenToB2d(this.x),TGame.lenToB2d(this.y));
	   var pig = TGame.b2World.CreateBody(bodyDef);
	   pig.CreateFixture(fix);	   
	   //��box2d������
       this.b2Obj = pig;
       //��pig
       pig.SetUserData(this);
	 },
     update:function()
	 {	   		 
	   if(this.b2Obj!=null)
	    {
		   //��ȡ���嵱ǰλ��
	       var pos = this.b2Obj.GetPosition();	
		   this.x = TGame.lenToScn(pos.x);
		   this.y = TGame.lenToScn(pos.y);
		   //��ȡ����Ƕ�
		   var ang = this.b2Obj.GetAngle();
		   this.deg = MathUtil.rad2deg(ang);
	    }       
	 }
   })
   //ע��pig���๤��
   Pig.ClassName = "Pig";
   ClassFactory.regClass(Pig.ClassName,Pig);
}())