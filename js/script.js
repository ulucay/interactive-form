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



$('.activities').append(`<p id='totalCost'></p>`);

let totalCost = 0;

$('.activities').on('change', (e) => {

  let cost = 0;


})




























/* //Register for Activities section - Check Handler
const jsFrameworksChecked = () => {
  if($('[name="js-frameworks"]').is(":checked")){
    $('[name="express"]').prop("disabled", true);
    $('[name="build-tools"]').prop("disabled", true);
  }
  else{
    $('[name="express"]').prop("disabled", false);
    $('[name="build-tools"]').prop("disabled", false);
  }
}

const expressChecked = () => {
  if($('[name="express"]').is(":checked")){
    $('[name="js-frameworks"]').prop("disabled", true);
    $('[name="build-tools"]').prop("disabled", true);
  }
  else{
    $('[name="js-frameworks"]').prop("disabled", false);
    $('[name="build-tools"]').prop("disabled", false);
  }
}

const buildToolsChecked = () => {
  if($('[name="build-tools"]').is(":checked")){
    $('[name="js-frameworks"]').prop("disabled", true);
    $('[name="express"]').prop("disabled", true);
  }
  else{
    $('[name="js-frameworks"]').prop("disabled", false);
    $('[name="express"]').prop("disabled", false);
  }
}

const jsLibsChecked = () => {
  if($('[name="js-libs"]').is(":checked")){
    $('[name="node"]').prop("disabled", true);
    $('[name="npm"]').prop("disabled", true);
  }
  else{
    $('[name="node"]').prop("disabled", false);
    $('[name="npm"]').prop("disabled", false);
  }
}

const npmChecked = () => {
  if($('[name="npm"]').is(":checked")){
    $('[name="js-libs"]').prop("disabled", true);
    $('[name="node"]').prop("disabled", true);
  }
  else{
    $('[name="npm"]').prop("disabled", false);
    $('[name="node"]').prop("disabled", false);
  }
}

const nodeChecked = () => {
  if($('[name="node"]').is(":checked")){
    $('[name="js-libs"]').prop("disabled", true);
    $('[name="npm"]').prop("disabled", true);
  }
  else{
    $('[name="js-libs"]').prop("disabled", false);
    $('[name="npm"]').prop("disabled", false);
  }
}


//Register for Activities section
$('.activities').change(()=>{
  
  jsFrameworksChecked();
  expressChecked();
  buildToolsChecked();
  jsLibsChecked();
  nodeChecked();
  npmChecked();


});

 */

