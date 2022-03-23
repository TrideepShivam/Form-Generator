$(document).ready(function(){
	$('body').on('click',"#menu",function(){
		$(this).hide(500);
		$("#topnav").css("width","100%");
	});
	$('body').on('click',"#closeNav",function(){
		$("#menu").show(500);
		$("#topnav").css("width","0%");
	});
});
function closeExternalContentContainer(t){
	t.parentElement.style.cssText="width:0%;z-index:0;";
}
function getContactData(t){
	let send=true;
	let fields=document.getElementsByClassName("contactTxt");
	let len = fields.length;
	let data={};
	for(i=0;i<len-1;i++){
		if(checkNullValue(fields[i])){
			fields[i].parentElement.style.borderBottom="1px solid red";
			alert("Please fill all Required Textboxes.");
			i=len;
			send=false;
		}else{
			let propertyName=fields[i].previousElementSibling.innerHTML;
			data[propertyName]=fields[i].value;
		}
	}
	if(send){/* write send in stead of false here */
		t.innerHTML="Processing...";
		t.disabled=true;
		data.Comment=fields[i].value;
		data = JSON.stringify(data);
		let container=document.getElementById("externalContentContainer");
		const xhr = new XMLHttpRequest();
		xhr.onload = function(){
			container.innerHTML="<button class='btndemo' id='closeExternalContentContainer' onclick='closeExternalContentContainer(this)'>&#10006;</button>"+this.responseText;
		}
		xhr.open("POST","/trideepshivam.com/response/sendContactToMail.php?v="+data,true);
		xhr.send();
	}
}
function getResponseHTMLCode(data){
	document.body.innerHTML="<div id='externalContentContainer'><button class='btndemo' id='closeExternalContentContainer' onclick='closeExternalContentContainer(this)'>&#10006;</button></div>"+document.body.innerHTML;
	let container=document.getElementById("externalContentContainer");
	const xhr = new XMLHttpRequest();
	xhr.onload = function(){		
		container.innerHTML+=this.responseText;
	}
	xhr.open("POST","/trideepshivam.com/response/getContactOrDemo.php?v="+data,true);
	xhr.send();
}
/* special txt effect */
function txtFocused(t){
	if(t.value==""){	
		text=t.previousElementSibling;
		box =t.parentElement;
		text.style.transform="scale(1) translate(0px,0px)";
		box.style.borderRadius="10px";
		box.style.border="1px solid aqua";
		text.style.color="silver";
	}
}
function txtUnfocused(t){
	if(t.value==""){
		text=t.previousElementSibling;
		box =t.parentElement;
		box.style.border="none";
		box.style.borderBottom="1px solid cornflowerblue";
		text.style.transform="scale(1.8) translate(18px,18px)";
		box.style.borderRadius="0px";
		text.style.color="grey";
	}else{
		if(t.type=='text'){
			if(!checkAlphabate(t.value)){
				redAlert(t);
				alert("invalid Name.");
			}
		}else if(t.type=='number'){
			if(t.value.length!=10||!checkNumber(t.value)){
				redAlert(t);
				alert("invalid Phone number.Use only 10 digits.");
			}
		}else if(t.type=='email'){
			if(!checkEmail(t.value)){
				redAlert(t);
				alert("invalid email. Please provide valid Email.");
			}
		}
	}
}
function redAlert(ele){
	ele.parentElement.style.border="1px solid red";
	ele.value="";
}

/* name number email validation mthods */
function checkAlphabate(str){
	var regex= /^[A-Za-z ]+$/;
	return regex.test(str);
}
function checkNumber(str){
	var regex= /^[0-9]+$/;
	return regex.test(str);
}
function checkEmail(str){
	let flag=0;
	let len=str.length;
	for(let i=0;i<len;i=i+1){
		if(str.charAt(i)=='@'){flag++;}
	}
	if(flag!=1){return false;}
	flag=0;
	for(i=0;i<len;i=i+1){
		if(str.charAt(i)=='.'){flag++;}
	}
	if(flag==0||flag>2){return false;}
	return true;
}

/* check that input element have data or not */
function checkNullValue(t){
	if(t.value==""){
		return true;
	}else{
		return false;
	}
}
