
    /*$(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/7);
      });
    });*/

    
   
   
   
   $(document).ready(function () {
    $('.page-scroll').click(function(event){
            //remove all pre-existing active classes
            $('.page-scroll').removeClass('active');
    
            //add the active class to the link we clicked
            $(this).addClass('active');
        });
    });

      window.onscroll = function () {
        const header_navbar = document.querySelector(".navbar");
        const sticky = header_navbar.offsetTop;
        const colour = document.querySelector(".fixed-top");
        const smollnavbar = document.querySelector(".customclass");
    
        if (window.pageYOffset > sticky) {
          //header_navbar.classList.add("bg-light");
          header_navbar.classList.add("shadow");
          colour.classList.add("scrolled");
        } else {
          //header_navbar.classList.remove("bg-light");
          header_navbar.classList.remove("shadow");
          colour.classList.remove("scrolled");
          smollnavbar.classList.remove("bg-light");
        }
    
      };

      $(document).ready(function () {
        const navbar = document.querySelector(".customclass");
        navbar.classList.remove("bg-light");
        $('.navbar-toggler').click(function(event){
                if(window.screen.width > 922){
                  navbar.classList.remove("bg-light");
                }
                if ($('.navbar-toggler').attr('aria-expanded') === "true" && $('.navbar-toggler').attr('data-bs-toggle') == "collapse") {
                  navbar.classList.add("bg-light");
                }
                else{
                  for(x =0;x<30;x++){
                    if(x == 29){
                      navbar.classList.remove("bg-light");
                    }
                  }
                }
            });
        });

        
       // Get all sections that have an ID defined
        /*const sections = document.querySelectorAll("span[id]");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlighter);

        function navHighlighter() {
          
          // Get current scroll position
          let scrollY = window.pageYOffset;
          
          // Now we loop through sections to get height, top and ID values for each
          sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 160;
            sectionId = current.getAttribute("id");
            
            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
            /*if (
              scrollY > sectionTop &&
              scrollY <= sectionTop + sectionHeight
            ){
              document.querySelector(".page-scroll").classList.add("active");
            } else {
              document.querySelector(".page-scroll").classList.remove("active");
            }
          });
        }*/


    
