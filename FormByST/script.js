function getNotification(t){
    let m="Use only letter "+t.value.charAt(t.value.length-1);
if (/^[a-zA-Z ]+$/.test(t.value.charAt(t.value.length-1))||t.value=="") {
} else {
    notifyMe(m,'red');    
     t.value=t.value.slice(0,t.value.length-1);
}   
}


function changeTextToDate(a){
    a.type="date";
}


function advanceOpener(addvance){
    let detailDiv= addvance.previousElementSibling;
    detailDiv.style.cssText="height:8%;top:2%;";
    detailDiv.children[detailDiv.children.length-1].style.cssText="display:block;filter:opacity(1);";
    addvance.children[addvance.children.length-1].style.cssText="display:none;filter:opacity(0);";
    addvance.style.cssText="height:71.5%;border-color:transparent;background-color:transparent;cursor:default;";
    for(i=0;i<detailDiv.children.length-1;i++){
        detailDiv.children[i].style="filter:opacity(0)";
        if(i>=0&&i<addvance.children.length-1){
            addvance.children[i].style="display:inline-block;";
        }
     }
    setTimeout(function(){
        for(i=0;i<10;i++)
            detailDiv.childNodes[1].style="display:none";
    },400);	
}


function detailOpener(detailDiv){
    let add=detailDiv.nextElementSibling;
        detailDiv.style.cssText="height:64%;top:4%;";
        add.style.cssText="height:6%;background-color:transparent;";
        detailDiv.children[detailDiv.children.length-1].style.cssText="display:none;filter:opacity(0);";
        
        for(i=0;i<add.children.length;i++){
        if(i!=5)
        add.children[i].style.filter="opacity(0)";
    }
        for(i=0;i<detailDiv.children.length-1;i++)
            detailDiv.children[i].style="display:flex;filter:opacity(0);";
            setTimeout(function(){
                for(j=0;j<detailDiv.children.length-1;j++)
                detailDiv.children[j].style="filter:opacity(1);";
            },80);
            setTimeout(function(){
                add.style.cssText="background-color:#46ea8d;border-color:#46ea8d;";
                add.children[5].style.cssText="display:inline-block;filter:opacity(1);";
                for(i=0;i<add.children.length;i++)
                    if(i!=5)
                    add.children[i].style.display="none";
                },330);
                
}


 function forPopupOpen() {addElementPopup(this.innerHTML);}
function outputForEmail(){ 
    let objEmail={main_label:'Email',input:'Email'};
    addHistoryEle(objEmail);
}

function elelistopener(mainDiv){
    let ele=mainDiv.nextElementSibling;
    if(ele.children[1].style.margin=="0.4vw"||ele.children[1].style.margin==""){
         ele.style.cssText="filter:opacity(1);height:auto;";
         for(let i=0;i<ele.children.length;i++){
            ele.children[i].style.display="block";
             ele.children[i].addEventListener('click',function(){
                elelistcloser(ele);
            });
         }
         for(let l=0;l<ele.children.length;l++){
             if(l!=4)
                 ele.children[l].addEventListener('click',forPopupOpen);
            else if(l==4)
                 ele.children[l].addEventListener('click',outputForEmail); 
         }
         for(let j=0;j<=ele.children.length;j++){
            setTimeout(function(){
                 ele.children[j].style.filter="opacity(1)";
                 ele.children[j].style.margin="0vw";
            },j*30);
         }
    } else{
        elelistcloser(ele);
    }
}


function elelistcloser(tager){    /*tager is elementList id's element*/
    tager.style.cssText="bottom:5vw;filter:opacity(0);";
    for(let i=0;i<tager.children.length;i++){
    tager.children[i].style.filter="opacity(0)";
    tager.children[i].style.margin="0vw";
}
     setTimeout(function(){
         tager.style.cssText="height:0%;";
         for(let j=0;j<tager.children.length;j++){
             tager.children[j].style.margin=".4vw";
             tager.children[j].style.display="none";
         }
     },200);
}

function deleteinput(){
    delHistoryEle(this.parentElement);
}

const updateNumEle={
    text:0,radio:0,range:0,email:0,date:0,select:0,checkbox:0,textarea:0,
    updigit:function(a){
        switch (a) {
        case 'Text':
            this.text+=1;
             return this.text; 
        case 'Radio': 
        this.radio+=1;
             return this.radio; 
         case 'Range': 
         this.range+=1;
              return this.range;
        case 'Email':
            this.email+=1;
            return this.email;
        case 'Date':
            this.date+=1;
            return this.date;
        case 'Select':
            this.select+=1;
            return this.select;
        case 'Checkbox':
            this.checkbox+=1;
            return this.checkbox;
        case 'Textarea':
            this.textarea+=1;
            return this.textarea;
        default:
            break;
        }
    } 
};

const inputObj=[];

function addHistoryEle(eleDetail){
    let count=0;
    let historydiv=document.getElementById('historyPanel');
    let divele=document.createElement('div');
    deleteSpan=document.createElement('span');
    deleteSpan.addEventListener('click',deleteinput);
    deleteSpan.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>';
    
    divele.appendChild(deleteSpan);
    count=updateNumEle.updigit(eleDetail.input);
    labels=document.createTextNode(eleDetail.input+'-'+count);
    eleDetail.id=eleDetail.input+'-'+count;
    paragrph=document.createElement('p');
    paragrph.appendChild(labels);
    divele.appendChild(paragrph);
    
    historydiv.appendChild(divele);
    pos=historydiv.scrollHeight-historydiv.clientHeight;
    historydiv.scrollTop=pos;
    inputObj.push(eleDetail);
    let displayedEle=showInOutput(eleDetail);
    eleDetail.outputedEle=displayedEle;
}

function delHistoryEle(parentDiv){ /* div in which "inputname" and delete icon situtated */
    let names=parentDiv.children[1].innerHTML;
        for(let i=inputObj.length;i>0;i--){
            if(inputObj[i-1].id==names.slice(0,names.length))
            {
                inputObj[i-1].outputedEle.remove();
                inputObj.splice(i-1,1);
                parentDiv.remove();
                break;
            }
        }
}
function storyOfRadioOption(allRest, parent)
{
    papa= document.createElement(parent);
    papa.setAttribute('class','basicBox');
    let child;
    let count=0;
    for(let rest in allRest)
    {
        if(parseInt(intSelector(rest))!=count)                                      /*this if section is to check string for attribute */
        {
            child=document.createElement(allRest[rest]);
            papa.appendChild(child); 
            count=parseInt(intSelector(rest));  
        }
        else                                                       /* if string is not attribute then it must element string */
            child.setAttribute(String(rest.slice(0,rest.length-1)),String(allRest[rest]));  
    }
    return papa;
}

function elementCreater(objs)
{
    let createdEle;
    if(objs.input=='Text'||objs.input=='Email'||objs.input=='Textarea')
    {
         createdEle=storyOfRadioOption( ob={element1:objs.setInputTag(),placeholder1:objs.main_label,type1:objs.input,class1:'lineTextBoxaajtak'},'div');
         return createdEle;
    }
    else if(objs.input=='Radio'||objs.input=='Option')
    {
         createdEle= document.createElement('div');
         let keyss = Object.keys(objs);
         let m=2;
         do {
             if(objs[keyss[m]]!='')
             {
                 let papa=storyOfRadioOption(ob={element1:objs.setInputTag(),type1:objs.input,name1:objs.main_label,element2:'label',class2:'inputLabel'},'div');
                 papa.lastElementChild.innerHTML=objs[keyss[m]];
                 createdEle.appendChild(papa);
             }
             m++;
         } while (intSelector(keyss[m])!=0);
         createdEle.setAttribute('class','basicBoxForRadOpt');
         return createdEle;
     }
     else if(objs.input=='Date')
     {
        createdEle= storyOfRadioOption(ob={element1:objs.setInputTag(), type1:objs.input,min1:objs.min_date, max1:objs.max_date,class1:'lineTextBoxaajtak',element2:'label', class2:'inputLabel'},'div');
        createdEle.lastElementChild.innerHTML=objs.main_label;
        return createdEle;
     }
     else if(objs.input=='Range'||objs.input=='Checkbox')
     {
        createdEle= storyOfRadioOption(ob={element1:objs.setInputTag(), type1:objs.input,min1:objs.min_date, max1:objs.max_date,element2:'label', class2:'inputLabel'},'div');
        createdEle.lastElementChild.innerHTML=objs.main_label;
        return createdEle;
     }
}

function showInOutput(allDetail){
    alert(JSON.stringify(allDetail));
    let outputDiv=document.getElementById('outputBody');
    allDetail.setInputTag=function(){
        if (this.input=='Textarea'||this.input=='Option') {
                return this.input;
        } else {
            return 'input';
        }
    }
    let dynamicElement= elementCreater(allDetail);
    dynamicElement.setAttribute('id',allDetail.id);
    outputDiv.appendChild(dynamicElement);
    return dynamicElement; /* return the current created ele so that we can add this ele to their detailed object */
}

function intSelector(str){
    let a=str;
    let len=a.length;
    if(!(isNaN(parseInt(a))))
        return(parseInt(a));

    else if(isNaN(parseInt(a.slice(len-1,len)))) return(0);

    else{
            for( let i=len;i>=0;i--)
            {
                if(isNaN(parseInt(a.slice(i-1,i))))
                    return(parseInt(a.slice(i,len)));
            }
        }
}

const allStyleObj={
    txtcontainer:{for:'Text',htmlCode:"<fieldset class='txtcontainer'><legend class='topname'>[your text which will be displayed as placeholder]</legend><input type='text' class='contactTxt' onfocusout='txtUnfocused(this)' onfocus='txtFocused(this)'></fieldset>"},
    outerCheckboxaajtak:{for:'Radio',htmlCode:" <div class='outerCheckboxaajtak' onclick='outerCheckboxGlow(this)'><input type='checkbox'><h3>&#10004;</h3></div>"},
    checkboxMiddleSection:{for:'Checkbox',htmlCode:`<div class='checkboxMiddleSection' onclick='checkboxWithSliderStyle(this,'your_color')'><input type='checkbox' class='checkboxStyleOne'><button class='checkboxSlider'></button></div>`},
    trafficOuter:{for:'Checkbox',htmlCode:"<div class='trafficOuter' onclick='getTrafficLight(this)' title='red=disagree,green=agree'><div ></div><div ></div><input type='checkbox'></div>"},
    popuprange:{for:'Range',htmlCode:"<div class='popuprange'><div>50</div><input type='range' max='222' min='0' oninput='popuprangeinput(this,max)'><div></div></div>"},
    BoxRange:{for:'Range',htmlCode:"<div class='BoxRange' ><input type='range' max='250' min='0' oninput='boxWalaRange(this)'><div  title='Use arrow key for minor change'>50</div>	</div>"},
    labelTextboxaajtak:{for:'Text',htmlCode:"<fieldset  class='labelTextboxaajtak'><label>'your Label'</label><input type='text'></fieldset>"},
    containerCircleCheckboxgk:{for:'Radio',htmlCode:"<div class='containerCircleCheckboxgk'><input type='checkbox' id='circle'><label for='circle'></label></div>"},
    switchCheckboxgk:{for:'Checkbox',htmlCode:"<input class='switchCheckboxgk' type='checkbox'>"},
    singleLineButtominputboxgk:{for:'Text',htmlCode:"<div class='singleLineButtominputboxgk'><input type='text'  placeholder='Textbox'></div>"},
    outlineTextboxaajtak:{for:'Text',htmlCode:"<input type='textbox' placeholder='name' class='outlineTextboxaajtak'>"},
    circleTextboxgk:{for:'Text',htmlCode:"<input type='textbox' placeholder='name' class='circleTextboxgk'>"},
    roundedTextboxFavBorder:{for:'Text',htmlCode:"<input type='textbox' placeholder='name' class='roundedTextboxFavBorder'>"}
};
function replaceElement(a,b)
{
    let len=a.children.length;
    let lastele;
   
    if(len>1){lastele= a.children[len-1];}
    a.innerHTML=b;
   
    if(len>1){ a.appendChild(lastele);}
   return a;
}

function setStyle(classname){
    let styleObjType=allStyleObj[classname].for;
    for(let k=0;k<inputObj.length;k++)
    {
        if(inputObj[k].input==styleObjType)
            {
            
                let objId=inputObj[k].id;
                if(inputObj[k].input=='Radio')
                {
                   
                    rangeParent=document.getElementById(objId);
                    for(let n=0;n<rangeParent.children.length;n++)
                    {
                       let finals= replaceElement(rangeParent.children[n],allStyleObj[classname].htmlCode);
                       finals.querySelector("input").setAttribute('name',inputObj[k].main_label);
                       finals.querySelector("input").setAttribute('type',inputObj[k].input);
                    }
                }
                else
                replaceElement(document.getElementById(objId),allStyleObj[classname].htmlCode);
            }
    }
}


/* ayush theme section js*/


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

/* ayush theme finish */
function forTheme(){
    chooseTheme(this);
}
function openThemePanel(){
    let mainbox=document.getElementById('ThemeSection').style.height="91%";
    const allradio= document.querySelectorAll("#ThemeSection input[name=text],#ThemeSection input[name=checkbox],#ThemeSection input[name=range]");
    for(i=0;i<allradio.length;i++){
        allradio[i].addEventListener('click', forTheme);
    }
}


function chooseTheme(a){
    nextElements=a.nextElementSibling;
    setStyle(nextElements.className);
}