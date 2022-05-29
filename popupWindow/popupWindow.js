function addElementPopup(btnType) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML = `<div class='popupWindow'>
                        <h1>`+ btnType + ` </h1> 
                        <input class="themeInputBox" type="text" placeholder="Label">`
                        + getAdditionalContent(btnType) +
                        `<div class="btnContainer">
                            <button class='commonbtn' style="background:var(--themeColor);">Add</button>
                            <button class='commonbtn' style="background:transparent;" onclick='closePopup(this)'>Cancel</button>
                        </div>
                    </div>
                    `;
}

function getAdditionalContent(btnType) {
    switch (btnType) {
        case 'Textbox':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" type="number" placeholder="min" >
                        <input class="themeInputBox" type="number" placeholder="max">
                    </div>
                    <div class="additionalContainer">
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                               <input type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Alphabetes
                       </div>
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                               <input type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Numbers
                       </div>
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="checkNextRadio(this,this.parentElement.nextElementSibling.children[0])">
                               <input type="checkbox">
                               <h3>&#10004;</h3>   
                           </div>spaces
                       </div>
                       <div class="checkboxContainer">
                           <div class="outerCheckboxaajtak" onclick="checkNextRadio(this,this.parentElement.previousElementSibling.children[0])">
                               <input type="checkbox">
                               <h3>&#10004;</h3>
                           </div>Non-spaces
                       </div>
                   </div>
                    `;
        case 'Radio':
            return `
                    <input class="themeInputBox" type="textbox" placeholder="label" onfocusout="getNext(this)">  
                    <input class="themeInputBox" type="textbox" placeholder="label" disabled style="background:grey;">  
                    `;
        case 'Checkbox':
            return ``;
        case 'Range':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" type="number" placeholder="min value" >
                        <input class="themeInputBox" type="number" placeholder="max value">
                    </div>
                    `;
        case 'Date':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" type="number" placeholder="min date" >
                        <input class="themeInputBox" type="number" placeholder="max date">
                    </div>
                    `;
        case 'Option':
            return `
                    <input class="themeInputBox" type="number" placeholder="option" onfocusout="getNext(this)">
                    <input class="themeInputBox" type="number" placeholder="option" disabled style="background:grey;">
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
        createNext(nxt,'label');
    }
    
}

function createNext(ele,placeholder='option'){
    let container = ele.parentElement;
    let newEle = document.createElement('input');
    newEle.setAttribute('class','themeInputBox');
    newEle.setAttribute('placeholder',placeholder);
    newEle.disabled=true;
    newEle.style.background="grey";
    container.insertBefore(newEle,ele.nextElementSibling);
}

function checkNextRadio(currentContainer,nextContainer){
    outerCheckboxGlow(currentContainer)
    if(nextContainer.children[0].checked){
        outerCheckboxGlow(nextContainer);
    }
}

function closePopup(ele) {
    ele.parentElement.parentElement.parentElement.remove();
}

