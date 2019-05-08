//When the page first loads, the first text field should be in focus by default
$('#name').focus();

//Hide other-title by default
$('#other-title').hide();

//If other-title is selected then show
$('select#title').on('change', () => {
    if($('select#title').val() === 'other'){
        $('#other-title').show();
    }
    else{
        $('#other-title').hide();
    }
})

//”T-Shirt Info” section

//Hides the colors section by default
$("#colors-js-puns").hide();

$('#design').change(() => {
  const designValue = $('#design').val();
  //Shows the colors section after design is selected
  $("#colors-js-puns").show();
  //Resets the options
  $("#color option").show();
  //Shows the options according to selected design
  if(designValue == 'js puns'){
    $("#color option[value='tomato']").hide();
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();
    //Selects the valid list item according to design option as default
    $("#color").val('cornflowerblue');
  }
  else if(designValue == 'heart js'){
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    //Selects the valid list item according to design option as default
    $("#color").val('tomato');
  }
});


let totalCost = 0;

$('.activities').append(`<span id='totalCost' style='float:right; font-size:26px;'></span>`);

$('.activities').on('change', (event) => {
  //Variables of check activity
  const $checkedActivity = $(event.target);
  const $checkedActivityText = $($checkedActivity).parent().text();

  //Captures the cost of the activity
  const index$ = $checkedActivityText.indexOf('$');
  const costOfActivity = parseInt($checkedActivityText.slice('-3'));
  
  //Calculates the cost according to checked activities
  if($checkedActivity.prop('checked')){
    totalCost += costOfActivity;
    $('#totalCost').text("Total: " + totalCost);
  }
  else{
    totalCost -= costOfActivity;
    $('#totalCost').text("Total: " + totalCost);
  }

  //Captures the date and time of the activity
  const $emDashIndex = $checkedActivityText.indexOf('—');
  const $commaIndex = $checkedActivityText.indexOf(',');

  const $dayAndTime = $checkedActivityText.slice($emDashIndex,$commaIndex);

  //Iterates through each activities to disable the ones that match with the current activity
  $('.activities input').each((index,element) => {
    const $labelText = $(element).parent().text();

    if($labelText.includes($dayAndTime)){
      if($checkedActivity.is(':checked')){
        $(element).not(':checked').prop('disabled',true);
      }
      else{
        $(element).not(':checked').prop('disabled',false);
      }
    }
  })
})

/*
Payment info section
*/

const $creditCardDiv = $('#credit-card');
//Credit card option selected as default
$('option[value="credit card"]').prop('selected', true);
$creditCardDiv.next().hide();
$creditCardDiv.next().next().hide();
//Checks the selected payment value and hide the rests
$('#payment').on('change', () => {
  const $selectedPayment = $('#payment :selected').val();

  if($selectedPayment == 'credit card'){
    $creditCardDiv.show();
    $creditCardDiv.next().hide();
    $creditCardDiv.next().next().hide();
  }
  else if($selectedPayment == 'paypal'){
    $creditCardDiv.next().show();
    $creditCardDiv.hide();
    $creditCardDiv.next().next().hide();
  }
  else if($selectedPayment == 'bitcoin'){
    $creditCardDiv.next().hide();
    $creditCardDiv.hide();
    $creditCardDiv.next().next().show();
  }
})


/*
Form Validators
*/

//Name Validation
const validName = () => {
  const $name = $('#name');

  if($name.val().length > 0 && /^[A-Za-z\s]+$/.test($name.val())){
    $name.css('borderColor' , '#c1deeb');
    return true;
  }
  else{
    $name.css('borderColor','red');
    return false ;
  }
}

//Mail Validation
const validEmail = () => {
  const $email = $('#mail');

  if(/\S+@\S+\.\S+/.test($email.val())){
    $email.css('borderColor','#c1deeb');
    return true;
  }
  else{
    $email.css( 'borderColor','red');
    return false;
  }
}

//Activity Validation
const validActivity = () => {
  $activity = $('.activities');

  if($('input[type="checkbox"]:checked').length > 0){
    //Removes the error message if condition is true
    $('#activityError').remove();
    return true;
  }
  else{
    if($('#activityError').length < 1)
    //Adds the error message if condition is false
      $activity.append(`<span id="activityError" style='float:left; font-size:20px; color:red;'> Please select activities</span>`);
      return false;
  }
}

//Credit card Validation
const validCreditCard = () => {
  const $cardNum = $('#cc-num');

  if(/^\d{13,16}$/.test($cardNum.val())){
    $cardNum.css('borderColor','#c1deeb');
    return true;
  }
  else{
    $cardNum.css( 'borderColor','red');
    return false;
  }
}

//Zipcode Validation
const validZipCode = () => {
  const $zipCode = $('#zip');

  if(/^\d{5}$/.test($zipCode.val())){
    $zipCode.css('borderColor','#c1deeb');
    return true;
  }
  else{
    $zipCode.css('borderColor','red');
    return false;
  }
}

//CVV Validation
const validCVV = () => {
  const $cvv = $('#cvv');
  
  if(/^\d{3}$/.test($cvv.val())){
    $cvv.css('borderColor','#c1deeb');
    return true;
  }
  else{
    $cvv.css('borderColor','red');
    return false;
  }
}

/*
Realtime validations
*/

//Name validation
$('#name').on('keyup', () => {
  validName();
})
//Mail validation
$('#mail').on('keyup', () => {
  validEmail();
})
//Creditcard validation
$('#cc-num').on('keyup', () =>{
  validCreditCard();
});
//CVV validation
$('#cvv').on('keyup', () => {
  validCVV();
});
//Zipcode validation
$('#zip').on('keyup', () => {
  validZipCode();
});


//Validates each section 
const validate = () => {
  const validationResults = [validName(), validActivity(), validEmail()];  
  
  //Adds related validations if payment is selected as credit card
  if($('#payment :selected').val() == 'credit card'){
    validationResults.push(validCreditCard(),validZipCode(), validCVV());
  }
  
  //Checks the validation values
  for(validation of validationResults){
    if(validation == false){
      return false;
    }
      return true;
  }
}

//Checks validation when a user clicked on submit
$('form').on('submit', (event) => {
  //If validation is false, stops the form submission
   if(validate() == false){
     event.preventDefault();
   }
})


