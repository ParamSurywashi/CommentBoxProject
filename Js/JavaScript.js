
let commentDraw=null;
function ClickFun(){
	if(document.querySelectorAll('#area')[0].value == "" || document.querySelectorAll('#name')[0].value == ""){
	  alert("Please Comment in Text Field");
	}else{
	let area =createComment();
	let Usrname=document.querySelectorAll('#name')[0].value;
	let dateTime=getDateTime();
	let total_text= document.querySelectorAll('#comment')[0];
  total_text=total_text.childElementCount;
  document.getElementById("comment").innerHTML=document.getElementById("comment").innerHTML+
	`<div id="cdbox`+total_text+`" class="cdbox"> <img src="img/UserIcon.png" id="imgId`+total_text+`" class="imgUser"> <span id="spnName">`+Usrname+`</span>`
  +`<p id="cmdText">`+area+`</p> <button id="replyBtn`+total_text+`" onClick="replyBtn(this)">Reply</button> `+
 `<button id="likeBtn`+total_text+`" onClick="likeBtn(this)"><span id="likeCounter`+total_text+`"> </span>Like</button> `+
 `<button id="deleteBtn`+total_text+`" onclick=deleteCmd(this);>Delete Comment</button>`+
` <span id="date"> `+dateTime+` </span> <div id="Rplcmdbox`+total_text+`" class="Rplcmdbox"> </div>`
+` <div id="replybox`+total_text+`" class="replybox"> </div></div>`;

//document.querySelectorAll('#cmdText')[0].innerText=area;
	//document.querySelectorAll('#date')[0].innerHTML=getDateTime();
	document.querySelectorAll('#comment')[0].style.display="block";
	}
}
	
let createComment=function(){
	var area = document.querySelectorAll('#area')[0].value;
	return area;
}


let getDateTime=function(){
	var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
				
			return datetime;
}

function replyBtn(data){
let rplyId= data.id.slice(8);

	document.getElementById("replybox"+rplyId).innerHTML=document.getElementById("replybox"+rplyId).innerHTML+
	`<input type="textfield"  id="rpy`+rplyId+`" class="rpy"/> <br><br>`+
`	<button id="rplCmdBtn`+rplyId+`" onclick="sendRply(this)">Send Reply</button> `;
  document.querySelectorAll('#replybox'+rplyId)[0].style.display="block";
  }

function sendRply(data){
	let CmdId= data.id.slice(9);
	let CmdData=document.querySelectorAll('.rpy')[0].value;
	
	//let replyData=document.querySelectorAll('#Rplcmdbox')[0].value;
	document.getElementById("replybox"+CmdId).innerHTML=``;
	
  document.querySelectorAll('#replybox'+CmdId)[0].style.display="none";
	document.getElementById("Rplcmdbox"+CmdId).innerHTML=document.getElementById("Rplcmdbox"+CmdId).innerHTML+
	` <div id="spn`+CmdId+`" class="spn">`+CmdData+`</div>`;
	
  document.querySelectorAll('#Rplcmdbox'+CmdId)[0].style.display="block";
  }
function deleteCmd(data)
{
	let deleteId= data.id.slice(9);
  document.getElementById("cdbox"+deleteId).innerHTML="";
  document.getElementById("cdbox"+deleteId).style.display="none";
}

function likeBtn(data)
{
	let likeId= data.id.slice(7);
	let likeCount = getLikerCount(likeId);
	likeCount++;
	
	document.getElementById("likeCounter"+likeId).innerHTML=`<small>`+likeCount+`</small>`;
}

function getLikerCount(id){
	let count= document.getElementById("likeCounter"+id).innerText;
	//count++;
	return count;
}