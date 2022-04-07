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

function checkboxWithSliderStyle(container,color){
	let ele = container.children;
	let t=ele[1];
	let cb=ele[0];
	if(!cb.checked){
		t.style.cssText="transform:translatex(59px);border:2px solid rgb(0,255,200);box-shadow:0 0 2px black inset,0 0 3px rgb(0,255,200);";
		container.style.backgroundColor=color;
		cb.checked=true;
	}else{
		t.style.cssText="transform:translatex(0px);border:2px solid rgb(255,255,255);box-shadow:0 0 2px black inset,0 0 3px rgba(0,0,0,.4);";
		container.style.backgroundColor="silver";
		cb.checked=false;
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
