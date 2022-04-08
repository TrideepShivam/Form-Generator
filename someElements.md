all methods and its descriptions for javascipt used styles.

use this content delivery network to add main.js style methods...

	  <script src='https://cdn.statically.io/gh/TrideepShivam/Form-Generator/main/jsCode/main.js'></script>
    
for css style please link the cdn of mainStyle.css as...

	<link rel='stylesheet' type='text/css' href='https://cdn.statically.io/gh/TrideepShivam/Form-Generator/main/cssCode/mainStyle.css'>
  
describe here all the new methods with argument and the description.

1. Special type of effect...

html:

    <fieldset class='txtcontainer'>
 	    <legend class='topname'>[your text which will be displayed as placeholder]</legend>
 	    <input type='text' class='contactTxt' onfocusout='txtUnfocused(this)' onfocus='txtFocused(this)'>
    </fieldset>
    
description: use above html code to create your special effect textbox like plaeholder will be transferred to the top of the text box with transition. use mentioned js and css cdn link.

2. slider checkbox or radio button.
html:

		<div class="checkboxMiddleSection" onclick="checkboxWithSliderStyle(this,'your_color')">
			<input type="checkbox" class="checkboxStyleOne">
			<button class="checkboxSlider"></button>
		</div>
    
description: use above html code to create your slider radio or checkbox with transition and set your color code what you want. use mentioned js and css cdn link.

3. glow checkbox button and class="outerCheckboxGlow".
html:

		<div class="outerCheckboxaajtak" onclick="outerCheckboxGlow(this)">
			<input type="checkbox">
			<h3>&#10004;</h3>
		</div>
    
description: use above html code to create your glow checkbox with glowed transition. use mentioned js and css cdn link.


