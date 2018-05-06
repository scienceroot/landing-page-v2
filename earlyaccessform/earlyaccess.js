jQuery(document).ready(function($) {
  "use strict";

  // Individual Early Access Form
  $('form.individualEarlyAccessForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      console.log("input: " + i.val());

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          // case 'checked':
          //   if (!i.attr('checked')) {
          //     ferror = ierror = true;
          //   }
          //   break;

          // case 'regexp':
          //   exp = new RegExp(exp);
          //   if (!exp.test(i.val())) {
          //     ferror = ierror = true;
          //   }
          //   break;
        }
        console.log("ferror: " + ferror);
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    
    // Handle checkboxes
    var selected = [];
    $('.form-row input:checked').each(function() {
      selected.push($(this).attr('name'));
    });
    if (selected.length == 0) {
      $('.checkbox-validation').html('Please select at least one checkbox.').show('blind'); 
    }
    else {
      $('.checkbox-validation').html('').hide();
    }
    // console.log("Checked: " + selected);
    
    if (ferror) return false;
    else var str = $(this).serialize();
    var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "earlyaccessform/earlyaccessform.php",
      data: str,
      success: function(msg) {
        // alert(msg);
        if (msg == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.companyEarlyAccessForm').find("input, textarea").val("");
          $('.companyEarlyAccessForm').find("input:checked").prop('checked', false);
          console.log("OK");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
          console.log("error: " + msg);
        }

      }
    });
    return false;
  });

  // Company Early Access Form
  $('form.companyEarlyAccessForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      console.log("input: " + i.val());

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.attr('checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        console.log("ferror: " + ferror);
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    
    // Handle checkboxes
    var selected = [];
    $('.form-row input:checked').each(function() {
      selected.push($(this).attr('name'));
    });
    if (selected.length == 0) {
      $('.checkbox-validation').html('Please select at least one checkbox.').show('blind'); 
    }
    else {
      $('.checkbox-validation').html('').hide();
    }
    // console.log("Checked: " + selected);
    
    if (ferror) return false;
    else var str = $(this).serialize();
    var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "earlyaccessform/earlyaccessform.php",
      data: str,
      success: function(msg) {
        // alert(msg);
        if (msg == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.companyEarlyAccessForm').find("input, textarea").val("");
          $('.companyEarlyAccessForm').find("input:checked").prop('checked', false);
          console.log("OK");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
          console.log("error: " + msg);
        }

      }
    });
    return false;
  });

});
