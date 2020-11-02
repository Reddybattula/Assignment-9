$(function () {
    // Use click method to display alert message
    $("#button1").click(function() {
        window.alert("button is clicked");
    });
    
    // Use bind method to display alert message
    $("#button2").bind('click', function() {
        window.alert("button is clicked");
    });
    
    //Using on method
    $("#button3").on('click', function() {
        window.alert("button is clicked");
    });
    
    //Using on method for handling two buttons
    $("body").on({
        click: function() {
            window.alert("button is clicked");
        }
    }, '#button4, #button5');
    
    //on div
    $("div:first-of-type").css('width','400px')
            .css('height','400px')
            .css('background-color', 'grey')	;
    
    $("body").on({
        
        mouseenter: function() {
            window.alert("Mouse entered the div");
        },
        mouseleave: function () {
            window.alert("Mouse left the div");
        },
        click: function() {
        window.alert("div is clicked");
       }
        
    }, 'div'	
    
    );
    
    //ener text to the span tag when event is performed on the div
    
    $("body").on({
        
        mouseenter: function() {
            $('div').next().text("Mouse entered the div");
        },
        mouseleave: function () {
            $('div').next().text("Mouse left the div");
        },
        click: function() {
        $('div').next().text("div is clicked");
       }
        
    }, 'div'	
    
    );
    
    //Actions on link
    
    $("a").text("modulemedia.com");
    $("a").attr("href","http://modulemedia.com/");
    $("a").click(function(event) {
        event.preventDefault();
        $(this).css('color','red');
        window.alert(event.target.nodeName + " triggered the event");
    });
    
    //div tag with resize action
    $(window).resize(function() {
        $("div:not(:first-of-type)").text("width: "+$(window).width()+" "+"height: "+$(window).height());
    });
    
    //event on input
    $('#simpleinput').focus(function() {
        $(this).css('background','lightgrey');
    });
    $('#simpleinput').blur(function() {
        $(this).css('background','white');
    });
    
    //form 
    $("#form").submit(function() {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var isValid = true;
        if (name == ""){
            $("#name").css('border','1px solid red');
            window.alert("Name is required");
            isValid = false;
        }
        
        if (email == ""){
            $("#email").css('border','1px solid red');
            window.alert("Email is required");
            isValid = false;
        }
        
        if (isValid == false) {
        event.preventDefault(); 			
    }
    });
    
    $("#name").change(function() {
                $("#name").css('border','1px solid green');
            });
    
    $("#email").change(function() {
                $("#email").css('border','1px solid green');
            });
    
    
});
    