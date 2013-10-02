jQuery(document).ready(function($){
//(function($){
    console.log("mindmeld.js")
    $('#services-tabs a:first').tab('show');

        $('.tab-content').find(".tab-pane:first").css({"opacity":"1"});

    $('#services-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
//})(jQuery);

});