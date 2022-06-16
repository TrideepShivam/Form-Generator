// Previous Code script -
// function ThemeSection(themeform){
//     let themebox=themeform.nextElementSibling;
//     themebox.style.cssText="display:inline-block;";
//     themeform.style.cssText="opacity:0;";
// }
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
		text.style.transform="scale(1.1) translate(5px,15px)";
		box.style.borderRadius="0px";
		text.style.color="grey";
	}
}
function checkboxWithSliderStyle(container,color){
	let ele = container.children;
	let t=ele[1];
	let cb=ele[0];
	if(!cb.checked){
		t.style.cssText="transform:translatex(22px);border:2px solid rgb(0,255,200);box-shadow:0 0 2px black inset,0 0 3px rgb(0,255,200);";
		container.style.backgroundColor=color;
		cb.checked=true;
	}else{
		t.style.cssText="transform:translatex(-5px);border:2px solid rgb(255,255,255);box-shadow:0 0 2px black inset,0 0 3px rgba(0,0,0,.4);";
		container.style.backgroundColor="silver";
		cb.checked=false;
	}			
}