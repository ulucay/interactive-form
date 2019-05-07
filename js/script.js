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

$('#design').change(() => {
  const designValue = $('#design').val();
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

$('.activities').append(`<span id='totalCost'></span>`);

$('.activities').on('change', (event) => {

  const $checkedActivity = $(event.target);
  const $checkedActivityText = $($checkedActivity).parent().text();


  const index$ = $checkedActivityText.indexOf('$');
  const costOfActivity = parseInt($checkedActivityText.slice('-3'));
  

  if($checkedActivity.prop('checked')){
    totalCost += costOfActivity;
    $('#totalCost').text("Total: " + totalCost);
  }
  else{
    totalCost -= costOfActivity;
    $('#totalCost').text("Total: " + totalCost);
  }

  const $emDashIndex = $checkedActivityText.indexOf('—');
  const $commaIndex = $checkedActivityText.indexOf(',');

  const $dayAndTime = $checkedActivityText.slice($emDashIndex,$commaIndex);

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

//Payment info section

/* const $selectedPayment = $('#payment :selected').val(); */
const $creditCardDiv = $('#credit-card');

$('#payment').on('change', () => {

  const $selectedPayment = $('#payment :selected').val();

  if($selectedPayment == 'credit card'){
    console.log('credit-card');
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


//Form Validation Variables
const $name = $(name);
const $email = $(email);
const $activitiesLength = $('input[type="checkbox"]:checked');
const $cardNum = $('#cc-num');
const $zipcode = $('#zip');
const $cvv = $('#cvv');

//Form Validators

//Name Validation
const validName = (name) => {
  return /^[A-Za-z\s]+$/.text(name);
}

//Mail Validation
const validEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

//Activity Validation
const validActivity = (activities) => {
  if(activities.length > 0){
    return true;
  }
}

//Credit card Validation
const validCreditCard = (cardNumber) => {
  return /^\d{13,16}$/.text(cardNumber);
}

//Zipcode Validation
const validZipCode = (zipCode) => {
  return /^\d{5}$/.test(zipCode);
}

//CVV Validation
const validCVV = (cvv) => {
  return  /^\d{3}$/.test(cvv);
}

