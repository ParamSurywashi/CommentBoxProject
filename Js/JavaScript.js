function loadFunc(){
	let x=window.innerWidth;
	let y= window.innerHeight;
	//document.getElementsByTagName("body")[0].style.backgroundImage="url('img/ccc.jpg')";
	document.getElementsByTagName("body")[0].style.backgroundColor="#CCF381";
	//rgb(233 234 245)
	document.getElementsByTagName("body")[0].style.backgroundSize = x+"px "+y+"px";
	
	if(window.localStorage.length == 0){
		//alert("NULLLLLLL");
	}else{
		for(let items=0; items<window.localStorage.length; items++){
			let areaitems=window.localStorage.getItem(items);
			//console.log(areaitems);
			//document.getElementById("comment").innerHTML=document.getElementById("comment").innerHTML+ ``+areaitems;
		}
	}
}

let commentDraw=null;
function ClickFun(){
	
		 document.getElementById("errMsgName").innerText="";
	  document.getElementById("errMsgArea").innerText="";
	if(document.querySelectorAll('#area')[0].value == "" || document.querySelectorAll('#name')[0].value == ""){
	   if(document.querySelectorAll('#area')[0].value == "" && document.querySelectorAll('#name')[0].value == ""){
	  document.getElementById("errMsgName").innerText="Please Type User Name";
	  document.getElementById("errMsgArea").innerText="Please Comment in Text Field";
	  }else if(document.querySelectorAll('#area')[0].value == ""){
	  document.getElementById("errMsgArea").innerText="Please Comment in Text Field";
	  }else if(document.querySelectorAll('#name')[0].value == ""){
	  document.getElementById("errMsgName").innerText="Please Type User Name";
	  }
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
+` <div id="replybox`+total_text+`" class="replybox"> </div> <span id="errMsgBox`+total_text+`" class="errMsgBox"> </span></div>  `;

//document.querySelectorAll('#cmdText')[0].innerText=area;
	//document.querySelectorAll('#date')[0].innerHTML=getDateTime();
	document.querySelectorAll('#comment')[0].style.display="block";
	
	//localStorage.setItem(Usrname,document.getElementById("comment").innerHTML );
	const nameandarea = {
    name: Usrname,
    area: document.getElementById("comment").innerHTML,
}

window.localStorage.setItem(total_text, JSON.stringify(nameandarea));

	document.querySelectorAll('#name')[0].value = "";
	document.querySelectorAll('#area')[0].value = "";
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
	if(document.querySelectorAll("[id=rpy"+rplyId+"]").length > 0) {
    document.getElementById("errMsgBox"+rplyId).innerText="Already have a Reply Box";
     }else{
	document.getElementById("errMsgBox"+rplyId).innerText="";
	document.getElementById("replybox"+rplyId).innerHTML=document.getElementById("replybox"+rplyId).innerHTML+
	`<input type="textfield"  id="rpy`+rplyId+`" class="rpy"/> <br><br>`+
`	<button id="rplCmdBtn`+rplyId+`" onclick="sendRply(this)">Send Reply</button> `;
  document.querySelectorAll('#replybox'+rplyId)[0].style.display="block";
  
	 }
  }

function sendRply(data){
	let CmdId= data.id.slice(9);
	let CmdData=document.querySelectorAll('#rpy'+CmdId)[0].value;

	if(CmdData==""){
		document.getElementById("errMsgBox"+CmdId).innerText="Please Reply in Box.... ";
	}else{
	document.getElementById("errMsgBox"+CmdId).innerText="";
	document.getElementById("replybox"+CmdId).innerHTML=``;
	
  document.querySelectorAll('#replybox'+CmdId)[0].style.display="none";
	document.getElementById("Rplcmdbox"+CmdId).innerHTML=document.getElementById("Rplcmdbox"+CmdId).innerHTML+
	` <div id="spn`+CmdId+`" class="spn">`+CmdData+`</div>`;
	
  document.querySelectorAll('#Rplcmdbox'+CmdId)[0].style.display="block";
  
  
	}
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

/*function loadFunc(){
let w=window.innerWidth;
	let h=window.innerHeight;
	alert(w+"    "+h);
	document.getElementsByTagName("body").style.width=w;
	document.getElementsByTagName("body").style.height=h;
} */