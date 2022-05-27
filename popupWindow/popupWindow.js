function addElementPopup(btnType) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML = `<div class='popupWindow'>
                        <h2>`+btnType+` </h2> 
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
    ele.parentElement.parentElement.parentElement.style.display = 'none';
}
function getAdditionalContent(btnType) {
    switch (btnType) {
        case 'Textbox':
            return `
                    <div>
                        <input class="themeInputBox" type="number" placeholder="min" style="">
                        <input class="themeInputBox" type="number" placeholder="max">
                    </div>
                    `;
        case 'Radio':
            return getRadioContent();
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