//---------Onload Porperties-----------//

window.onload = function () {
    document.getElementById('name').focus(); //Focus on the name field
    document.getElementById("other-title").style.display = "none";  // Hide other job role input field
        //Default Payment Info section
    $('#payment').val('credit card');
    $('#paypal').hide();
    $('#bitcoin').hide();
    $('#colors-js-puns').hide(); //Hides color options until choice is selected
    $('#total').hide(); //Hides total section until a selection is made
};
    //Display other job role input field when other is selected
    const otherJobRole = document.getElementById('title');
    otherJobRole.addEventListener('click', (e) => {
        if(otherJobRole.value == "other"){
            document.getElementById("other-title").style.display="block"; 
        } else { 
            document.getElementById("other-title").style.display="none";
        }
});
    //Display total div only if checkbox selected
$($("[type='checkbox']")).on('change', function () {
if ($('input[type=checkbox]:checked').length == 0) {
            $('#total').hide();
        } else {
         $('#total').show();
        }
});
    //Display the color options that match the design selected in the "Design" menu.
const designOption = document.getElementById('design');
    designOption.addEventListener('click', (e) => {
    if(designOption.value == "js puns"){
        $('option[value=tomato], [value=steelblue], [value=dimgrey] ').prop('disabled', true);
        $('option[value=cornflowerblue],[value=darkslategrey],[value=gold] ').prop('disabled', false);
        $('#colors-js-puns').show();
    } else if (designOption.value == "heart js"){
        $('option[value=tomato], [value=steelblue], [value=dimgrey] ').prop('disabled', false);
        $('option[value=cornflowerblue],[value=darkslategrey],[value=gold] ').prop('disabled', true);
        $('#colors-js-puns').show();
    }
});

    //Users picks activities conflicting options will be disabled
$("input[name='js-frameworks']").change(function() {
    if(this.checked) {
        $("input[name=express]").prop("disabled",true);
    } else {
        $("input[type='checkbox']").removeAttr("disabled");
    } 
});
$("input[name='express']").change(function() {
    if(this.checked) {
        $("input[name=js-frameworks]").prop("disabled",true);
    } else {
        $("input[type='checkbox']").removeAttr("disabled");
    } 
});
$("input[name='js-libs']").change(function() {
    if(this.checked) {
        $("input[name=node]").prop("disabled",true);
    } else {
        $("input[type='checkbox']").removeAttr("disabled");
    } 
});
$("input[name='node']").change(function() {
    if(this.checked) {
        $("input[name=js-libs]").prop("disabled",true);
    } else {
        $("input[type='checkbox']").removeAttr("disabled");
    } 
});
$("input[name='js-frameworks']").change(function() {
    if(this.checked) {
        $("input[name=express]").prop("disabled",true);
    } else {
        $("input[type='checkbox']").removeAttr("disabled");
    } 
});
//Tracks activites checked and keeps a running total
let totalCost = 0;

$("input[name=all]").change(function() {
if(this.checked) { totalCost += 200;
        $("#totalDiv").val( "$" + totalCost);  
    } else { totalCost -= 200;
        $("#totalDiv").val( "$" + totalCost);  
    }
});
$("input[name=js-frameworks]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost);
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost);
    }
});
$("input[name=js-libs]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost)
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost)
    }
});
$("input[name=express]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost)
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost)
    }
});     
$("input[name=node]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost)
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost)
    }
});
$("input[name=build-tools]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost)
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost)
    }
});
$("input[name=npm]").change(function() {
if(this.checked) { totalCost += 100;
        $("#totalDiv").val("$" + totalCost)
    } else { totalCost -= 100;
        $("#totalDiv").val("$" + totalCost)
    }
});

// Display payment sections based on the payment option chosen in the select menu
$(function () {
  $("#payment").change(function() {
    let val = $(this).val();
    if(val === "credit card") {
        $("#credit-card").show();
        $("#paypal").hide();
        $("#bitcoin").hide();
    }   else if(val === "paypal") {
       $("#paypal").show();
        $("#credit-card").hide();
        $("#bitcoin").hide()
    }  else if(val === "bitcoin") {
       $("#bitcoin").show();
        $("#credit-card").hide();
        $("#paypal").hide()
    }
  });
});

//Form Validations
const required =new RegExp();
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
$($("[type='submit']")).click(function (submit) {
       
});

// Email must be an email
$('#mail').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

//Only allows numbers in the credit card fields
$('#cc-num').keydown(function(){
    const ccNum = $(this);
    const numRequired = ccNum.val().replace(/[^0-9]/, '');
    ccNum.val(numRequired);
});
$('#zip').keydown(function(){
    const zip = $(this);
    const numRequired = zip.val().replace(/[^0-9]/, '');
    zip.val(numRequired);
});
$('#cvv').keydown(function(){
    const cvv = $(this);
    const numRequired = cvv.val().replace(/[^0-9]/, '');
    cvv.val(numRequired);
});
//On sumbmint form validations 
$($("[type='submit']")).click(function (submit) {
    if ($("#name").val() === "") { //if no value in name field prevent submit
        submit.preventDefault();
        $('#name').val('Please enter your name');
        $('#name').focus();
        $("label[for='name']").css("color", "red");
        $('#name').focus().css("color", "red")
    } else if ($("#mail").val() === ""){ //if no email entered in email field prevent submit
        submit.preventDefault();
        $("#mail").val('valid email address required');
        $('#mail').focus();
        $("label[for='mail']").css("color", "red"); 
    }  else if ($('input[type=checkbox]:checked').length == 0) { //if no checkbox checked prevent submit
        submit.preventDefault();
        $('.activities').after( "<p>**Please select atleast one activity</p>");
    }  else if  ($("#cc-num").val().length < 13 || $("#cc-num").val().length >16 ){ //if credit card field isnt between 13-16 prevent
        submit.preventDefault();  
        $("#cc-num").val('valid credit card number required');
    }  else if  ($("#zip").val().length !== 5){ //if zip code field isnt 5 digits prevent submit
         submit.preventDefault();  
        $("#zip").val('Invalid Zipcode');
    }  else if  ($("#cvv").val().length !== 3 ){ //if cvv field isnt 3 digits prevent submit
        submit.preventDefault();  
        $("#cvv").val('Invalid CVV');
    } 
});

