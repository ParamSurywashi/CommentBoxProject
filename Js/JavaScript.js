function loadFunc(){
	let x=window.innerWidth;
	let y= window.innerHeight;
	document.getElementsByTagName("body")[0].style.backgroundColor="#CCF381";

	
	if(window.localStorage.length == 0){
		//alert("NULLLLLLL");
	}else{
		for(let items=0; items<window.localStorage.length; items++){
			//console.log(items);
			var key = localStorage.key(items);
			
			lclStorageData=window.localStorage[key];
			document.getElementById("comment").innerHTML=document.getElementById("comment").innerHTML+``+lclStorageData;
	    document.querySelectorAll('#comment')[0].style.display="block";
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
	
	total_text = window.localStorage.length;
	//console.log(total_text);

  document.getElementById("comment").innerHTML=document.getElementById("comment").innerHTML+
	`<div id="cdbox`+total_text+`" class="cdbox"> <img id="imgId`+total_text+`" class="imgUser"> <span id="spnName">`+Usrname+`</span>`
  +`<p id="cmdText">`+area+`</p> <button id="replyBtn`+total_text+`" onClick="replyBtn(this)">Reply</button> `+
 `<button id="likeBtn`+total_text+`" onClick="likeBtn(this)"><span id="likeCounter`+total_text+`"> </span>Like</button> `+
 `<button id="deleteBtn`+total_text+`" onclick=deleteCmd(this);>Delete Comment</button>`+
` <span id="date"> `+dateTime+` </span> <div id="Rplcmdbox`+total_text+`" class="Rplcmdbox"> </div>`
+` <div id="replybox`+total_text+`" class="replybox"> </div> <span id="errMsgBox`+total_text+`" class="errMsgBox"> </span></div>  `;


	document.querySelectorAll('#comment')[0].style.display="block";
	

let localData= document.getElementById("cdbox"+total_text).outerHTML;
//console.log(localData);
window.localStorage.setItem(total_text, localData);

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
  
let localData= document.getElementById("cdbox"+CmdId).outerHTML;
window.localStorage.setItem(CmdId, localData);
  
	}
  }
function deleteCmd(data)
{
	let deleteId= data.id.slice(9);
  document.getElementById("cdbox"+deleteId).remove();
  window.localStorage.removeItem(deleteId);
}

function likeBtn(data)
{
	let likeId= data.id.slice(7);
	let likeCount = getLikerCount(likeId);
	likeCount++;
	
	document.getElementById("likeCounter"+likeId).innerHTML=`<small>`+likeCount+`</small>`;
	let localData= document.getElementById("cdbox"+likeId).outerHTML;
	window.localStorage.setItem(likeId, localData);
}

function getLikerCount(id){
	let count= document.getElementById("likeCounter"+id).innerText;
	//count++;
	return count;
}
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
/*function loadFunc(){
let w=window.innerWidth;
	let h=window.innerHeight;
	alert(w+"    "+h);
	document.getElementsByTagName("body").style.width=w;
	document.getElementsByTagName("body").style.height=h;
} */