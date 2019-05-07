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



$('.activities').append(`<span id='totalCost'></span>`);

let totalCost = 0;

$('.activities').on('change', (event) => {

  let cost;

  const regexTime = /—([\w-\d ]+),/;
  const regexCost = /\$(\d+)$/;
  
  const $checkedActivity = $(event.target);
  const $checkedActivityText = $($checkedActivity).parent().text();

  regexTime.exec($checkedActivityText);
  const matchedTime = RegExp.$1;

  regexCost.exec($checkedActivityText);
  const checkedCost = RegExp.$1;

  console.log(checkedCost);

  console.log(matchedTime);

  $('.activities label').each((index,element) => {
    console.log($(element).text());
  })


})




