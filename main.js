$("input[name=house]").change(function() {
    $("input[name=house]:checked~h3").css(
        {
            "opacity": "1"
        });
    $("input[name=house]:not(:checked)~h3").css(
        {
            "opacity": "0.25"
        });
});

$("input[name=study]").change(function() {
    $("input[name=study]:checked~img").css(
        {
            "opacity": "1"
        });
    $("input[name=study]:not(:checked)~img").css(
        {
            "opacity": "0.25"
        });
});

$("input[name=eatout]").change(function() {
    $("input[name=eatout]:checked~img").css(
        {
            "opacity": "1"
        });
    $("input[name=eatout]:not(:checked)~img").css(
        {
            "opacity": "0.25"
        });
});

$("input[name=snack]").change(function() {
    $("input[name=snack]:checked~h3").css(
        {
            "opacity": "1"
        });
    $("input[name=snack]:not(:checked)~h3").css(
        {
            "opacity": "0.25"
        });
});

$("input[name=trips]").change(function() {
    $("input[name=trips]:checked~img").css(
        {
            "opacity": "1"
        });
    $("input[name=trips]:checked~div").css(
        {
            "opacity": "1"
        });
    $("input[name=trips]:not(:checked)~img").css(
        {
            "opacity": "0.25"
        });
    $("input[name=trips]:not(:checked)~div").css(
        {
            "opacity": "0.25"
        });
});

$("input[name=pe]").change(function() {
    $("input[name=pe]:checked~h3").css(
        {
            "opacity": "1"
        });
    $("input[name=pe]:not(:checked)~h3").css(
        {
            "opacity": "0.25"
        });
});

// https://www.w3schools.com/howto/howto_css_modals.asphttps://www.w3schools.com/howto/howto_css_modals.asp
var question_length = 6;
var modal = document.getElementById('myModal');
$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    if (choices.length < question_length) {
        alert('You need to answer all the questions!');
    }
    else if (choices.length === question_length) {
        
        modal.style.display = "block";
        var sum = 0;

        for (choice in choices) {
            console.log(choices[choice]);
            console.log(Number(choices[choice]));
            sum += Number(choices[choice]);
        }

        console.log(sum);
        
        if (sum < 12) { document.getElementById('outcome1').style.display = "block"; }
        else if (sum < 16) { document.getElementById('outcome2').style.display = "block"; }
        else if (sum < 20) { document.getElementById('outcome3').style.display = "block"; }
        else if (sum < 35) { document.getElementById('outcome4').style.display = "block"; }
        else if (sum < 30) { document.getElementById('outcome5').style.display = "block"; }
        else if (sum <= 36) { document.getElementById('outcome6').style.display = "block"; }
    }
  });

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

$('.close').on('click', function(e) {
    modal.style.display = "none";
    document.getElementById('outcome1').style.display = "none";
    document.getElementById('outcome2').style.display = "none";
    document.getElementById('outcome3').style.display = "none";
    document.getElementById('outcome4').style.display = "none";
    document.getElementById('outcome5').style.display = "none";
    document.getElementById('outcome6').style.display = "none";
});

// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
  modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('outcome1').style.display = "none";
    document.getElementById('outcome2').style.display = "none";
    document.getElementById('outcome3').style.display = "none";
    document.getElementById('outcome4').style.display = "none";
    document.getElementById('outcome5').style.display = "none";
    document.getElementById('outcome6').style.display = "none";
  }
}
