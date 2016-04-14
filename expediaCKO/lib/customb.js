// Custom JavaScript 

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var wi = $(window).width();

//Stikcy header
// This function will be executed when the user scrolls the page.
$(window).scroll(function(e) {
    var scroller_anchor = $(".trip-summary-container").offset().top;
    if (wi >= 880 && $(this).scrollTop() >= scroller_anchor && $('.scroller').css('position') != 'fixed') {
        $('.scroller').css({
            'position': 'fixed',
            'top': '10px'
        });

        $('.scroller_anchor').css('height', '40px');
    } else if (wi >= 880 && $(this).scrollTop() < scroller_anchor && $('.scroller').css('position') != 'relative') {
        $('.scroller_anchor').css('height', '0px');
        $('.scroller').css({
            'position': 'relative',
        });
    }
});


//Function for demoing active card

function activeCardDemo() {
    var cardno = $('#demoField').val();

    if (cardno == '4') {
        $('.visa').removeClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '51') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').removeClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '34') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').removeClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '6011') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').removeClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }


    if (cardno == '54') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').removeClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '3528') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').removeClass("inactive-card");
    }

    if (cardno == '') {
        $('.visa').removeClass("inactive-card");
        $('.mastercard').removeClass("inactive-card");
        $('.amex').removeClass("inactive-card");
        $('.discover').removeClass("inactive-card");
        $('.diners').removeClass("inactive-card");
        $('.jcb').removeClass("inactive-card");

    }
}



//Function for switching to new card

function editCardStep1() {
    $('.saved-1-card').hide();
    $('.change-1-card-stage-1').show();
}

function editCardStep2() {
    $('.change-1-card-stage-1').hide();
    $('.change-1-card-stage-2').show();
}


//Functions to switch from saved to new card for shared module

function switchToNew() {
    $('#saved-card-pane').hide();
    $('#new-card-pane').show();
}

function switchToSaved() {
    $('#new-card-pane').hide();
    $('#saved-card-pane').show();
}

function toggleDescription() {
    $('.saved-card-description').toggle();

}



//Function for switching to saved card

function savedCard() {
    $('.add-card').hide();
    $('.saved').show();
}

//Function for switching between dropdown option for saved card list (saved cards state)

function changeSavedOption() {
    var ccchoice = $('#demoCCDropdown1').val();

    if (ccchoice == '5') {
        $('.change-1-card-stage-1').hide();
        $('.change-1-card-stage-2').show();
        $("#demoCCDropdown2").val("5");
    }
}

function changeSavedOption2() {
    var ccchoice2 = $('#demoCCDropdown2').val();

    if (ccchoice2 != '5') {
        $('.change-1-card-stage-2').hide();
        $('.change-1-card-stage-1').show();
        $("#demoCCDropdown1").val("ccchoice2");
    }
}




function signIn() {
    $('.site-content').fadeTo(250, 0.3, function() {
        $('.notification').fadeToggle().delay(500);
        $('.notification').fadeToggle(function() {
            $('.notsignedin').fadeToggle();
            $('#traveler-guest').fadeToggle(function() {
                $('.signedin').fadeToggle();
                $('#traveler-signedin').fadeToggle(function() {
                    $('.site-content').fadeTo(250, 1);
                });
            });
        });
    });
}

//Function for filling hotel/activity contact

$('#t1lastname').blur(function() {
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    $('#hotelname1').html(t1fn + ' ' + t1ln);
    $('#activityname1').html(t1fn + ' ' + t1ln);
});

$('#t2lastname').blur(function() {
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    $('#hotelname2').html(t2fn + ' ' + t2ln);
    $('#activityname2').html(t2fn + ' ' + t2ln);
});

//Function for displaying account creation email address

$('#t1emailaddress').blur(function() {
    var emailaddress = $("#t1emailaddress").val();
    $('#creationemail').html(emailaddress);
});


//Funcation for edit form for playback A
$('#infoplayback').hide();
$('#editinfo1').click(function() {
    $('#tplayback1').hide();
    $('#traveler1edit').show();
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    var t1email = $("#t1emailaddress").val();
    var t1phone = $("#t1phoneno").val();
    var t1dd = $("#t1day").val();
    var t1mm = $("#t1month").val();
    var t1yyyy = $("#t1year").val();
    $('#t1firstnamepform').val(t1fn);
    $('#t1lastnamepform').val(t1ln);
    $('#t1emailaddresspform').val(t1email);
    $('#t1phonenopform').val(t1phone);
    if ($('#t1male').is(":checked")) {
        $('#t1malepform').attr("checked", "checked");
    } else if ($('#t1female').is(":checked")) {
        $('#t1femalepform').attr("checked", "checked");
    }
    $('#t1daypform').val(t1dd);
    $('#t1monthpform').val(t1mm);
    $('#t1yearpform').val(t1yyyy);
    // add code for filling out edit from from playback 

});
$('#editinfo2').click(function() {
    $('#tplayback2').hide();
    $('#traveler2edit').show();
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    var t2dd = $("#t2day").val();
    var t2mm = $("#t2month").val();
    var t2yyyy = $("#t2year").val();
    if ($('#t2male').is(":checked")) {
        $('#t2malepform').attr("checked", "checked");
    } else if ($('#t2female').is(":checked")) {
        $('#t2femalepform').attr("checked", "checked");
    }
    $('#t2firstnamepform').val(t2fn);
    $('#t2lastnamepform').val(t2ln);
    $('#t2daypform').val(t2dd);
    $('#t2monthpform').val(t2mm);
    $('#t2yearpform').val(t2yyyy);
    // add code for filling out edit from from playback 

});



$('#edithotel').click(function() {
    $('#hotelplayback').hide();
    $('#hotelinfo').show();
    $('#updatehotel').show();
    $('.hotel-prompt').show();
});
$('#editactivity').click(function() {
    $('#activityplayback').hide();
    $('#activityinfo').show();
    $('#updateactivity').show();
    $('.activity-prompt').show();
});
//Function for closing form B

function blurclose() {
    //update traverler name;
    //add the checked mark;
    //close the form
    $('#traveler2').css("visibility", "hidden");
    $('#traveler2').css("height", "0");
    $('#traveler2').css("opacity", "0");
    $('#traveler2').addClass("viewed");
    $('#traveler2').removeClass("open");
    $('#traveler2').attr("aria-expanded", "false");
    $('#traveler2link').addClass("viewed");
    $('#traveler2link').removeClass("open");
    $('html, body').animate({
        scrollTop: $("#traveler2form").offset().top
    }, 0);
    //how to perform the toggel open action 

}


// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
//Function for done with travleler info and show insurance
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

$('#insurance-sec').hide();
$('#payment-sec').hide();
$('#review-and-book').hide();
$('#account-sec').hide();



function travelerDone() {
    $('.hotel-prompt').hide();
    $('.activity-prompt').hide();

    //remove done button
    $('#traveler-info-done').hide();
    $('#flight-hotel-sep').hide();

    // set playback for traveler1     
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    var t1email = $("#t1emailaddress").val();
    var t1phone = $("#t1phoneno").val();
    var t1dd = $("#t1day").val();
    //var selectedMonthName = months[$("#datepicker").datepicker('getDate').getMonth()];
    var temp1 = $("#t1month").val();
    var temp2 = parseInt(temp1);
    temp2--;
    var t1mm = months[temp2];
    var t1yyyy = $("#t1year").val();
    var hname = $("#hotelcontact").val();
    var aname = $("#activitycontact").val();
    if ($('#t1male').is(":checked")) {
        $('#tplaybackgender1').html('Male');
    }
    if ($('#t1female').is(":checked")) {
        $('#tplaybackgender1').html('Female');
    }
    if ($('#hotel1').is(":checked")) {
        $('#hotelplaybackname').html(t1fn + ' ' + t1ln);
    }
    if ($('#activity1').is(":checked")) {
        $('#activityplaybackname').html(t1fn + ' ' + t1ln);
    }
    $('#tplayback1name1').html(t1fn + ' ' + t1ln);
    $('#tplayback1email1').html(t1email);
    $('#tplaybackphone1').html(t1phone);
    $('#tplaybackdob1').html(t1mm + ' ' + t1dd + ', ' + t1yyyy);

    // set traveler2
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    var t2dd = $("#t2day").val();
    var temp1 = $("#t2month").val();
    var temp2 = parseInt(temp1);
    temp2--;
    var t2mm = months[temp2];
    var t2yyyy = $("#t2year").val();
    if ($('#t2male').is(":checked")) {
        $('#tplaybackgender2').html('Male');
    }
    if ($('#t2female').is(":checked")) {
        $('#tplaybackgender2').html('Female');
    }

    //Hotel  playback
    if ($('#hotel2').is(":checked")) {
        $('#hotelplaybackname').html(t2fn + ' ' + t2ln);
    }
    if ($('#hotelbutton').is(":checked")) {
        $('#hotelplaybackname').html(hname);
    }

    //acitivity playback
    if ($('#activity2').is(":checked")) {
        $('#activityplaybackname').html(t2fn + ' ' + t2ln);
    }
    if ($('#activitybutton').is(":checked")) {
        $('#activityplaybackname').html(aname);
    }


    $('#tplaybackname2').html(t2fn + ' ' + t2ln);
    $('#tplaybackdob2').html(t2mm + ' ' + t2dd + ', ' + t2yyyy);


    // // Change hotel/activity playback
    // $('.hotel-prompt').hide();
    // $('.activity-prompt').hide();


    //show playback and hide original form
    $('#infoplayback').show();
    $('#traveler1form').hide();
    $('#traveler2form').hide();
    $('#hotelinfo').hide();
    $('#hotelplayback').show();
    $('#activityinfo').hide();
    $('#activityplayback').show();

    //show insurance section
    $('#insurance-sec').show();
    $('#insurance-sec').addClass("open");
    $('#insurance-sec').addClass("toggle");

    //scroll to insurance

    $('html, body').animate({
        scrollTop: $("#ins-title").offset().top
    }, 0);
}



// Function for updating playback




$('#updateplayback1').click(function() {
    // add code for updating playback

    $('#traveler1edit').hide();
    var t1fn = $("#t1firstnamepform").val();
    var t1ln = $("#t1lastnamepform").val();
    var t1email = $("#t1emailaddresspform").val();
    var t1phone = $("#t1phonenopform").val();
    var t1dd = $("#t1daypform").val();
    var temp1 = $("#t1monthpform").val();
    var temp2 = parseInt(temp1);
    temp2--;
    var t1mm = months[temp2];
    var t1yyyy = $("#t1yearpform").val();
    $('#tplayback1name1').html(t1fn + ' ' + t1ln);
    $('#tplayback1email1').html(t1email);
    $('#tplaybackphone1').html(t1phone);
    if ($('#t1malepform').is(":checked")) {
        $('#tplaybackgender1').html('Male');
    } else if ($('#t1femalepform').is(":checked")) {
        $('#tplaybackgender1').html('Female');
    }
    $('#tplaybackdob1').html(t1mm + ' ' + t1dd + ', ' + t1yyyy);
    $('#hotelname1').html(t1fn + ' ' + t1ln);
    $('#activityname1').html(t1fn + ' ' + t1ln);
    $('#creationemail').val(t1email);
    $('#tplayback1').fadeIn(1000);
    $('html, body').animate({
        scrollTop: $("#step1").offset().top
    }, 0);

});

$('#updateplayback2').click(function() {
    // add code for updating playback
    $('#traveler2edit').hide();
    var t2fn = $("#t2firstnamepform").val();
    var t2ln = $("#t2lastnamepform").val();
    var t2dd = $("#t2daypform").val();
    var temp1 = $("#t2monthpform").val();
    var temp2 = parseInt(temp1);
    temp2--;
    var t2mm = months[temp2];
    //var t2mm = $("#t2monthpform").val();
    var t2yyyy = $("#t2yearpform").val();
    $('#tplaybackname2').html(t2fn + ' ' + t2ln);
    $('#tplaybackdob2').html(t2mm + ' ' + t2dd + ', ' + t2yyyy);
    if ($('#t2malepform').is(":checked")) {
        $('#tplaybackgender2').html('Male');
    } else if ($('#t1femalepform').is(":checked")) {
        $('#tplaybackgender2').html('Female');
    }
    $('#tplayback2').fadeIn(1000);
    $('#hotelname2').html(t2fn + ' ' + t2ln);
    $('#activityname2').html(t2fn + ' ' + t2ln);
    $('html, body').animate({
        scrollTop: $("#step1").offset().top
    }, 0);

});

$('#updatehotel').click(function() {
    $('.hotel-prompt').hide();
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    var hname = $("#hotelcontact").val();
    if ($('#hotel1').is(":checked")) {
        $('#hotelplaybackname').html(t1fn + ' ' + t1ln);
    }
    if ($('#hotel2').is(":checked")) {
        $('#hotelplaybackname').html(t2fn + ' ' + t2ln);
    }
    if ($('#hotelbutton').is(":checked")) {
        $('#hotelplaybackname').html(hname);
    }
    $('#hotelinfo').hide();
    $('#hotelplayback').show();
});

$('#updateactivity').click(function() {

    $('.activity-prompt').hide();
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    var aname = $("#activitycontact").val();
    if ($('#activity1').is(":checked")) {
        $('#activityplaybackname').html(t1fn + ' ' + t1ln);
    }
    if ($('#activity2').is(":checked")) {
        $('#activityplaybackname').html(t2fn + ' ' + t2ln);
    }
    if ($('#activitybutton').is(":checked")) {
        $('#activityplaybackname').html(aname);
    }
    $('#activityinfo').hide();
    $('#activityplayback').show();
});


//Function for displaying and hiding insurance moduel and playback

$('#ins-added1').hide();
$('#ins-added2').hide();
$('#ins-declined').hide();


function selectInsurance() {
    $('.site-content').fadeTo(250, 0.3, function() {
        $('.notification').fadeToggle().delay(500);
        $('html, body').animate({
            scrollTop: $("#ins-title").offset().top
        }, 0);
        $('.notification').fadeToggle(function() {
            $('.site-content').fadeTo(250, 1);
        });
    });

    //show  sections
    $('#payment-sec').show();
    $('#review-and-book').show();
    $('#account-sec').show();

    if (document.getElementById('ins-option1-button').checked) {
        $('#ins-added1').fadeIn().delay(1000);
        $('#ins-plans').fadeToggle().delay(1000);
        $('html, body').animate({
            scrollTop: $("#ins-title").offset().top
        }, 0);

        // Change price in trip sum
        $('div').remove('.insurance-price-line');
        var insurance1priceline = '<div class="price-line cf insurance-price-line"><span class="left price-item">Insurance</span><div class="right price-item">$84.00<span class="icon icon-expand" style="visibility:hidden;"></span></div>';
        $('.activity-price').append(insurance1priceline);
        $('.total').html('$2107.28');

    } else if (document.getElementById('ins-option2-button').checked) {
        $('#ins-added2').fadeIn().delay(1000);
        $('#ins-plans').fadeToggle().delay(1000);
        $('html, body').animate({
            scrollTop: $("#ins-title").offset().top
        }, 0);

        // Change price in trip sum
        $('div').remove('.insurance-price-line');
        var insurance2priceline = '<div class="price-line cf insurance-price-line"><span class="left price-item">Insurance</span><div class="right price-item">$114.00<span class="icon icon-expand" style="visibility:hidden;"></span></div>';
        $('.activity-price').append(insurance2priceline);
        $('.total').html('$2137.28');

    } else if (document.getElementById('ins-option3-button').checked) {
        $('#ins-declined').fadeIn().delay(1000);
        $('#ins-plans').fadeToggle().delay(1000);
    }

}

function showInsPlan() {
    $('#ins-added1').hide();
    $('#ins-added2').hide();
    $('#ins-declined').hide();
    $('#ins-plans').fadeToggle().delay(1000);
}

// Function for select insurance

function scrollBack() {
    if (!document.getElementById('ins-option1-button').checked && !document.getElementById('ins-option2-button').checked && !document.getElementById('ins-option3-button').checked) {
        $('html, body').animate({
            scrollTop: $("#ins-title").offset().top
        }, 400);
        $('#inswarning').css("color", "red");
    }
}

// Function for checking radion button

$("#hotelcontact").focus(function() {
    $('#hotelbutton').attr("checked", "checked");
});
$("#activitycontact").focus(function() {
    $('#activitybutton').attr("checked", "checked");
});