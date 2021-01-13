$(document).foundation();

var gods = [{
    "name": "Zeus",
    "img": "/img/zeus.png"
},
{
    "name": "Hera",
    "img": "/img/hera.png"
}]

var output = "<div>";
$.each(gods, function(index, god) {

    var image = "<img src=\"" + god.img + "\" class=\"god-logo\"/>"
    output += "<div class=\"god-" + god.name + "\">" + god.name + image + "</div>"
});

var image = "<img src=\"/img/zeus.png\"/>";
output += "</div>"

$(".gods").html(output);