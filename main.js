$(document).ready(function(){
    // back to  top
    $(window).scroll(function(){
        var a = $(window).scrollTop();   
        if( a > 300){
            $('.back-to-top').fadeIn();
        }
        else{
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(){
        $('body,html').animate({scrollTop:0});
    });
    // back to  top

    //control navbar header
    $('.navbar-item:nth-child(1) .navbar-link').click(function(){
        window.location.href = ('home.html');
    });
    $('.navbar-item:nth-child(2) .navbar-link').click(function(){
        window.location.href = ('product.html');
    });
    $('.navbar-item:nth-child(3) .navbar-link').click(function(){
        window.location.href = ('product.html');
    });
    $('.navbar-item:nth-child(4) .navbar-link').click(function(){
        window.location.href = ('product.html');
    });
    $('.navbar-item:nth-child(5) .navbar-link').click(function(){
        window.location.href = ('product.html');
    });
    $('.navbar-item:nth-child(6) .navbar-link').click(function(){
        window.location.href = ('notify.html');
    });
    $('.header-left').click(function(){
        window.location.href = ('home.html');
    });
    $('.header-cart').click(function(){
        window.location.href = ('cart.html');
    });
    //control navbar

    //control navbar left
    $('.category-list .category-item').click(function(){
        window.location.href = ('product.html');
    });
    //control navbar left

    //control product
    $('.product-box').click(function(){
        window.location.href = ('detail.html');
    });
    //control product
    $('.type-1').click(function(){
        window.location.href = ('home.html');
    });
    $('.type-2').click(function(){
        window.location.href = ('product.html');
    });




    // mobile show
    $('.header-icon').click(function(){
        // $('.header-icon').addClass('active'); 
            $('.header-mobile').addClass('active');  
            $('body').addClass('toLeft'); 
            $('.header-overlay').show();
            $('.header-overlay').click(function(){
                $('.header-overlay').hide();          
                $('.header-mobile').removeClass('active'); 
                $('body').removeClass('toLeft'); 
            });
            $('.header-close').click(function(){
                $('.header-overlay').hide();          
                $('.header-mobile').removeClass('active'); 
                $('body').removeClass('toLeft'); 
            });

    });


    // $('.nav-mobile>li').click(function(){
    //     if($(this).hasClass('active'))
    //     {           
    //         $(this).children('.nav-item-show').slideUp();
    //         $(this).removeClass('active');      
    //         $(this).children('.mobile-show').removeClass('rotate');
    //     }
    //     else
    //     {
    //         $('.nav-item-show').slideUp();
    //         $(this).children('.nav-item-show').slideDown();
    //         $('.nav-mobile>li').removeClass('active');          
    //         $(this).addClass('active');
    //         $(this).children('.mobile-show').addClass('rotate');
            
    //         // $('.mobile-show').removeClass('rotate');
    //     }
    // });


    $('.mobile-show').click(function(){
        if($(this).hasClass('active')){
            
        }else{
            $(this).children('.nav-item-show').slideDown();
        }
    });



    
    // mobile show



    // $('.data-btn').click(function(){
    //     $('.header-overlay').show();
    //     $(this).children('.cart-box').slideDown();  
           
    // });
    // $('.close-cart').click(function(){
    //     $('.header-overlay').hide();
    //     $('.cart-box').hide();
    // });  
});