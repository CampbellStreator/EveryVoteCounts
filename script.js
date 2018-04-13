$(document).ready(function() {
  // Get the variables
  var $form = $('form#pledge-form'),
  url = 'https://script.google.com/macros/s/AKfycbwC7rrSfKt9ntAYyLL4qm7tVdXf6xknIkdQzPa6uqcVNKEBvdK6/exec'

  // Stop the form from submitting
  $('#pledge-form').on('submit', function(e) {
    e.preventDefault();
  })

  // Manually submit the form via button click
  $('#pledge-form button').on('click', function(e) {
    e.preventDefault();
    $('#pledge-form button').text('Submitting...');

    if (!$(this).hasClass('disabled')) {
      $(this).addClass('disabled');

      var fname = $('#pledge-form #fname').val(),
      lname = $('#pledge-form #fname').val(),
      email = $('#pledge-form #email').val(),
      phone = $('#pledge-form #phone').val();

      if (validateForm(fname, lname, email)) {
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: $form.serializeObject()
        }).success(function() {
          alert('Thanks for pledging to vote! We will be in touch shortly with more information!');
          $('#pledge-form button').text('Thanks for pledging!');
        }
        );
      } else {
        $('#pledge-form button').html('Commit To Vote &rarr;');
        $(this).removeClass('disabled');
      }
    }
  })

  // Form validation - not strong, but quick and dirty.
  function validateForm(fname, lname, email) {
    console.log(fname, lname, email);

    if (!fname || fname.length == 0 || fname == '') {
      alert('First name is required');
      $('#pledge-form input').addClass('err');
      return false;
    } else {
      console.log('fname checks')
    }

    if (!lname || lname.length == 0 || lname == '') {
      alert('Last name is required');
      $('#pledge-form input').addClass('err');
      return false;
    } else {
      console.log('lname checks')
    }

    if (!email || email.length == 0) {
      alert('Valid email is required');
      $('#pledge-form input').addClass('err');
      return false;
    } else {
      console.log('email checks')
    }

    return true;
  }
})
