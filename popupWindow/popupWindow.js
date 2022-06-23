function addElementPopup(btnType) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML = `<div class='popupWindow'>
                        <h1>`+ btnType + ` </h1> 
                        <input class="themeInputBox" name="main_label" type="text" placeholder="Label">`
                        + getAdditionalContent(btnType) +
                        `<div class="btnContainer">
                            <button class='commonbtn' onclick='sendElementDetail(this,"`+ btnType +`")' style="background:var(--themeColor);">Add</button>
                            <button class='commonbtn' style="background:transparent;" onclick='closePopup(this)'>Cancel</button>
                        </div>
                    </div>
                    `;
}

function sendElementDetail(t,popupElementType){
    let newElement={};   
    newElement['input']=popupElementType;
    const input = document.querySelectorAll(".popupContainer input");
    for(let i=0;i<input.length;i++){
        let ele=input[i];
        if(ele.type=="text"||ele.type=="number"||ele.type=="date"||ele.type=="range"){
            newElement[ele.name]=ele.value;
        }else if(ele.type=="checkbox"||ele.type=="radio"){
            newElement[ele.name]=ele.checked;
        }
    }
    closePopup(t);
    addHistoryEle(newElement);    
}

function getAdditionalContent(btnType) {
    switch (btnType) {
        case 'Text':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" name="min" type="number" placeholder="min" >
                        <input class="themeInputBox" name="max" type="number" placeholder="max">
                    </div>
                    <div class="additionalContainer">
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                               <input name="alphabate" type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Alphabetes
                       </div>
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                               <input name="number" type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Numbers
                       </div>
                       <div class="radioContainer">
                           <div class="outerCheckboxaajtak" onclick="checkNextRadio(this)">
                               <input name="space" type="checkbox" >
                               <h3>&#10004;</h3>   
                           </div>spaces
                       </div>
                       <div class="radioContainer">
                           <div class="outerCheckboxaajtak" onclick="checkNextRadio(this)">
                               <input name="non_space" type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Non-spaces
                       </div>
                   </div>
                    `;
        case 'Radio':
            return `
                    <input class="themeInputBox" name="label1" type="textbox" placeholder="label1" onfocusout="getNext(this)">  
                    <input class="themeInputBox" name="label2" type="textbox" placeholder="label2" disabled style="background:grey;">  
                    `;
        case 'Checkbox':
            return ``;
        case 'Range':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" name="min" type="number" placeholder="min value" >
                        <input class="themeInputBox" name="max" type="number" placeholder="max value">
                    </div>
                    `;
        case 'Date':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" name="min_date" type="date" placeholder="min date" >
                        <input class="themeInputBox" name="max_date" type="date" placeholder="max date">
                    </div>
                    `;
        case 'Option':
            return `
                    <input class="themeInputBox" name="option1" type="text" placeholder="option1" onfocusout="getNext(this)">
                    <input class="themeInputBox" name="option2" type="text" placeholder="option2" disabled style="background:grey;">
                    `;
        case 'Textarea':
            return ``;
        default:
            return '<p>' + btnType + ' in process</p>';
    }

}

function getNext(t){
    if(t.value!=""){
        t.removeAttribute('onfocusout');
        let nxt = t.nextElementSibling;
        nxt.disabled=false;
        nxt.style.background='transparent';
        nxt.setAttribute('onfocusout','getNext(this)');
        createNext(nxt);
    }
    
}

function createNext(ele){
    let container = ele.parentElement;
    let placeholderAndName;
    let txt = ele.name;
    if(txt[0]=='o'){
        placeholderAndName='option'+(intSelector(txt)+1);
    }else{
        placeholderAndName='label'+(intSelector(txt)+1);
    }
    let newEle = document.createElement('input');
    newEle.setAttribute('class','themeInputBox');
    newEle.setAttribute('placeholder',placeholderAndName);
    newEle.setAttribute('name',placeholderAndName);
    newEle.disabled=true;
    newEle.style.background="grey";
    container.insertBefore(newEle,ele.nextElementSibling);
}

function checkNextRadio(currentElement){
    const radioList =document.querySelectorAll('.radioContainer input');
    let rLength=radioList.length;
    console.log(rLength);
    for(i=0;i<rLength;i++){
        let r= radioList[i];
        if(r.checked){
            console.log(r.checked);
            outerCheckboxGlow(r.parentElement);
        }
    }
    outerCheckboxGlow(currentElement);
}

function closePopup(ele) {
    ele.parentElement.parentElement.parentElement.remove();
}

function loading(order){
    if(order){
        let main = document.createElement('div');
        main.setAttribute('class', 'popupContainer');
        main.setAttribute('id', 'loadingContainer');
        document.body.appendChild(main);
        main.style.cssText="flex-direction:column;z-index:11;";
        main.innerHTML=`<div id='circleContainer'>
                            <div class="circle" id="circle1"></div>
                            <div class="circle" id="circle2"></div>
                            <div class="circle" id="circle3"></div>
                            <div class="circle" id="circle4"></div>
                            <div class="circle" id="circle5"></div>
                        </div>
                        <h1 style='color:silver;' onclick='loading(false)'>Loading...</h1>`;
    }else{
        document.getElementById('loadingContainer').remove();
    }
}

