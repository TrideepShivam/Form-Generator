function addElementPopup(btnType) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML = `<div class='popupWindow'>
                        <h1>`+ btnType + ` </h1> 
                        <input class="themeInputBox" type="text" placeholder="Label">`
        + getAdditionalContent(btnType) +
        `<div>
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
                                <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                                    <input type="checkbox" oninput="checkNextRadio(this.parentElement.nextElementSibling.firstChild)">
                                    <h3>&#10004;</h3>   
                                </div>spaces
                            </div>
                            <div class="checkboxContainer">
                                <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                                    <input type="checkbox" oninput="checkNextRadio(this.parentElement.previousElementSibling.firstChild)">
                                    <h3>&#10004;</h3>
                                </div>Non-spaces
                            </div>
                        </div>
                    `;
        case 'Radio':
            return `
                        
                    `
        case 'Checkbox':
            return getCheckboxContent();
        case 'Range':
            return getRangeContent();
        case 'Date':
            return getDateContent();
        case 'Option':
            return getOptionContent();
        case 'Textarea':
            return getTextareaContent();
        default:
            return '<p>' + btnType + ' in process</p>';
    }

}





function checkNextRadio(ele){
    if(ele.checked){
        ele.checked=false;
    }
}

function closePopup(ele) {
    ele.parentElement.parentElement.parentElement.remove();
}

