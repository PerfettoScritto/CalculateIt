$(document).ready(function() {



    $("<link/>").appendTo('head').attr({ "href": "https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700&subset=latin,latin-ext", "rel": "stylesheet" });

    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');



    $.get(chrome.extension.getURL('/calculator.html'), function(data) {
        $(data).appendTo('body');
    });

    $.get(chrome.extension.getURL('/calculate.js'), function(data) {

        $("<script></script>").appendTo('body').attr("src", chrome.extension.getURL('/calculate.js'));

    });

    var map = { 67: false, 73: false };
    $(document).keydown(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = true;
            if (map[67] && map[73]) {

                // event after buttons were pressed
                $("#wrap").slideToggle(100, "linear");
            }
        }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
        }
    });


});