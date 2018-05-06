<?php
  $contact_email_to = "contact@scienceroot.com";
  $contact_subject_prefix = "Early Access Form Message: ";

  $error_companyWebsite = "Company website is too short or empty!";
  $error_email = "Please enter a valid email!";
  $error_only_pdf = "The only accepted files are PDF files.";
  $error_incorrect_form = "Another type of form was submitted.";

  $message .= "A new request to Scienceroot early access program with the following data was received: \n";

  function appendTextToMessage($textToAppend)
  {
    $message .= $textToAppend;
  }

  function isIndividualForm()
  {
    return ( isset($_POST["isIndividual"]) && ( $_POST["isIndividual"] === "true" ) );
  }

  function isCompanyForm()
  {
    return ( isset($_POST["isCompany"]) && ( $_POST["isCompany"] === "true" ) );
  }

  if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    die('Sorry Request must be Ajax POST.');
  }

  if(isset($_POST)) {

    // Email is common for individual and company.
    $email = $_POST["email"];
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
      die($error_email);
    }

    appendTextToMessage("Email: " . $email . "\n");

    if ( isIndividualForm() )
    {
      appendTextToMessage("Type of request: INDIVIDUAL.\n");

      // Handle individual form.

      // Check uploaded file extension.
    }
    else if ( isCompanyForm() )
    {
      appendTextToMessage("Type of request: COMPANY.\n");

      // Handle company form.
      $companyWebsite = $_POST["companyWebsite"]);

      if(!filter_var($companyWebsite, FILTER_SANITIZE_STRING)) {
        die($error_companyWebsite);
      }
      
      appendTextToMessage("Company website: " . $companyWebsite . "\n");
    }
    else
    {
      // Give error.
      die($error_incorrect_form);
    }

    appendTextToMessage("Options checked: \n");

    // Individual form has an extra checkbox.
    if ( isIndividualForm() )
    {
      if (isset($_POST["helpBuildMetaLanguage"]))
      {
        appendTextToMessage("- To help build the scientific meta language. \n"); 
      }
    }

    // The below checkboxes are common for individual and company.
    if (isset($_POST["offerOwnDatasets"]))
    {
      appendTextToMessage("- To offer datasets I own. \n");
    }
    if (isset($_POST["purchaseOfferedDatasets"]))
    {
      appendTextToMessage("- To purchase datasets offered. \n");
    }
    if (isset($_POST["helpDataScienceAndAnalysis"]))
    {
      appendTextToMessage("- To help data science and analysis. \n");
    }
    if (isset($_POST["helpImproveData"]))
    {
      appendTextToMessage("- To help improve the data on Scienceroot. \n");
    }

    // $sendemail = mail($contact_email_to, $contact_subject_prefix . $subject, $message,
    //   "From:  $contact_subject_prefix" . PHP_EOL .
    //   "Reply-To: $email" . PHP_EOL .
    //   "X-Mailer: PHP/" . phpversion()
    // );

    // echo $message;

    // if( $sendemail ) {
      echo 'OK';
    // } else {
      // echo 'Could not send mail! Please check your PHP mail configuration.';
    // }
  }
?>
