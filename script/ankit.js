/* Custom JS */

var date1=new Date(2011,8,22);//Remember, months are 0 based in JS
var date2=new Date();
var date3=new Date(1990,1,6);//Remember, months are 0 based in JS
var date4=new Date();
var year1=date1.getFullYear();
var year2=date2.getFullYear();
var year3=date3.getFullYear();
var year4=date4.getFullYear();
var month1=date1.getMonth();
var month2=date2.getMonth();
var month3=date3.getMonth();
var month4=date4.getMonth();
if(month1===0){ //Have to take into account
  month1++;
  month2++;
}
if(month3===0){ //Have to take into account
	month3++;
	month4++;
}
numberOfMonths = (year2 - year1) * 12 + (month2 - month1) + 1;
numberOfMonths1 = (year4 - year3) * 12 + (month4 - month3) + 1;
$('.expYear').html(parseInt(numberOfMonths/12));
$('.month').html(numberOfMonths%12);
$('.myAge').html(parseInt(numberOfMonths1/12));

var request;

$("#contactForm").submit(function(event){
    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();
    var data = {};
    data.name = $('#name').val();
    data.email = $('#email').val();
    data.subject = $('#subject').val();


    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.post('/mail.php', data);

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Your Email Sent");
        alert('Your mail sucessfully sent to Ankit Thakkar');
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

});