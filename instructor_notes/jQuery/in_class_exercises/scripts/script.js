// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1

// 2. Grab the HTML element that is both an H1 and has an ID of "second"

// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$("#myDiv").text("Jquery makes JS easy!");
// 4. Append this image to end of the body. http://www.fillmurray.com/200/200
$('body').append( <img src= 'http://www.fillmurray.com/200/200'/>);
// 5. Change the background color of the page to green.
$("#myDiv").css("color", "red");
// 6. Remove the div with and ID of 'myDiv'



$('form').on('submit', function (event){
    event.preventDefault [];
    const val = $['#inputMagic'].val();
    $
}