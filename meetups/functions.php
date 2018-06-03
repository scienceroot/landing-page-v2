<?php

function showSciencerootMeetupPictures($meetup_pictures_folder_name)
{
    $images_dir = "../img/meetups/" . $meetup_pictures_folder_name . "/*.jpg";

    $all_pictures = glob($images_dir);

    $numOfPictures = count($all_pictures);

    // echo "IMAGES DIR: " . $images_dir;
    // print_r($all_pictures);    

    // Start from second picture, because the first one is the cover picture.
    for ($i=1; $i < $numOfPictures; $i++)
    {
        $image_name = $all_pictures[$i];

        // If 4 pictures are already shown, create a new row.
        // We check for 1 because we start at index 1.
        if ( ($i % 4) === 1)
        {
            echo "<div class='row'>";
        }

        echo "
            <div class='col-md-3 text-center'>
            <a href='" . $image_name . "' class='gallery-popup'>
                <img src='" . $image_name . "' class='wow fadeInUp' />
            </a>
            </div>
        ";

        if ($numOfPictures === 1)
        {
            echo "</div>";
        }
        // If
        // - the number of pictures is greater than one AND
        // - it is not on the first picture AND
        // - 4 pictures are already shown.
        // OR
        // - it`s the last picture
        // then close the row.
        else if ( ( ( ($i % 4) === 0 ) && ( $i > 1 ) ) || ($i === ($numOfPictures - 1) ) )
        {
            echo "</div>";
        }
    }
}
