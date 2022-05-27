function addElementPopup(btnType) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML = `<div class='popupWindow'>
                        <h1>`+btnType+` </h1> 
                        <input class="themeInputBox" type="text" placeholder="Label">`
                        + getAdditionalContent(btnType) +
                        `<div>
                            <button class='commonbtn' style="background:var(--themeColor);">Add</button>
                            <button class='commonbtn' style="background:transparent;" onclick='closePopup(this)'>Cancel</button>
                        </div>
                    </div>
                    `;
}
function closePopup(ele) {
    ele.parentElement.parentElement.parentElement.remove();
}
function getAdditionalContent(btnType) {
    switch (btnType) {
        case 'Textbox':
            return `
                    <div class="additionalContainer">
                        <input class="themeInputBox" type="number" placeholder="min" >
                        <input class="themeInputBox" type="number" placeholder="max">
                    </div>
                    <fieldset>
                        <legend>Contains</legend>
                        <div class="additionalContainer">
                            <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                                <input type="checkbox" name="constraint">
                                <h3>&#10004;</h3>
                            </div>Alphabetes
                            <div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
                                <input type="checkbox" name="constraint">
                                <h3>&#10004;</h3>
                            </div>Numbers
                        </div>
                        <div class="additionalContainer">
                            radioboxes
                        </div>
                    </fieldset>
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