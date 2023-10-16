$.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("header.html", function(data){
    $("#header-placeholder").replaceWith(data);
});