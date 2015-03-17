var myHeight;
var parallaxObject = '.parallaxObject';
var parallaxChild = '.parallaxChild';
var cursor;
var endPoint;
var multiplier;
var item;

$(document).ready(function(){
    myHeight = findHeight();
    
    //Prepare objects
    $(parallaxObject).css('background-size', 'cover');
    $(parallaxChild).css('position','relative');
    $(parallaxObject).css('overflow','hidden');
    $(parallaxObject).css('background-attachment','fixed');
    
    //Run for the first time to set initial positions
    if($(parallaxObject).length != 0){
        parallax(parallaxObject);
    }
    
    $(window).scroll(function (event) {
        //Load parallax Efect Function everytime the window is scrolled
        if($(parallaxObject).length != 0){
            $(parallaxObject).each(function(){
                parallax(this)        
            });
        }
    });

    function parallax(item){
        var item = $(item);
        var scrolled = $(window).scrollTop();
        multiplier = (item.attr('data') == null ? 1 : item.attr('data'));

        //If objects position is in the main screen or not. Also makes sure the animation stops if the user can't see the animation to avoid overhead
        if(item.offset().top < myHeight && (item.offset().top + item.outerHeight()) > scrolled){
            var endPoint = item.outerHeight() + item.offset().top;
            var cursor = $(window).scrollTop();
            doMove(item, cursor, endPoint, multiplier);
        }else if(item.offset().top > myHeight && ((scrolled + myHeight)-item.offset().top) >= 0 && (scrolled < item.outerHeight() + item.offset().top)){
            var endPoint = item.outerHeight() + myHeight;
            var cursor = $(window).scrollTop() + myHeight - item.offset().top;
            doMove(item, cursor, endPoint, multiplier);
            
        }
        
        function doMove(item, cursor, endPoint, multiplier){
            //Animate the background
            item.css('background-position-y',  100-(cursor *100/endPoint * multiplier) + '%');

             //Gets children
            item.find(parallaxChild).each(function(){
                child = $(this);
                scale = (child.hasClass('perspective') ? Number(child.attr('depth'))+1 : 2);
                depth = (child.attr('depth') == null ? 1 : Number(child.attr('depth'))-0.3);
                child.css('top',  (item.outerHeight()/10 - ((cursor/depth) *item.outerHeight()/endPoint)-(endPoint*0.05*depth)) + 'px');
                
                //If perspective option -> change size of child
                if(!child.hasClass('rezised')){
                    child.css('width', (child.outerWidth() * scale/0.9 )+"px");
                    child.css('height', (child.outerHeight() * scale/0.9 )+"px");
                    child.css('background-size', "cover");
                    child.addClass('rezised');
                }
            }); 
        }
    }

});//===========================================End Document Ready


function findHeight()
{
    var myHeight = 0;
    if( typeof( window.innerHeight ) == 'number' ) {
    //Non-IE
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientHeight || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientHeight || document.body.clientHeight ) ) {
    //IE 4 compatible
        myHeight = document.body.clientHeight;
    }	

    return myHeight;
}

$(window).resize(function(e) {
	//Find window height
	myHeight = findHeight();
});

