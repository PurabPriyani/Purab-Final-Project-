$(document).ready(function () {

    $(function () {
        $("#header").load("header.html");
        $("#nav").load("navbar.html");
    });

    $('#open-nav').click(function () {
        $('#navbar').addClass('open');
    });

    $('#close-nav').click(function () {
        $('#navbar').removeClass('open');
    });

    $(".details-btn").click(function () {
        var $this = $(this);
        var $product = $this.closest('.product');
        var $description = $product.find('.product-description');

        $description.slideToggle('fast', function () {
            if ($description.is(':visible')) {
                $this.text('Less');
                $product.css('height', '680px');
            } 
            else {
                $this.text('Details');
                $product.css('height', '450px');
            }
        });
    });

    // Slider functionality
    let slideIndex = 0;
    const slides = $('.slides');
    const totalSlides = $('.slide').length;

    function showSlide(index) {
        slides.css('transform', `translateX(-${index * 100}%)`);
        slideIndex = index;
    }

    function nextSlide() {
        const nextIndex = (slideIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    }

    // first slide shown initially
    showSlide(slideIndex);

    // Event listeners for manual controls
    $('#next-slide').click(nextSlide);
    $('#prev-slide').click(prevSlide);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Background image rotation
    const backgrounds = [
        './img/slider1.jpg',
        './img/discount2.jpg',
        './img/discount3.jpg'
    ];

    let backgroundIndex = 0;

    function changeBackground() {
        backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
        $('.masthead').css('background-image', `url(${backgrounds[backgroundIndex]})`);
    }

    // Change background every 3 seconds
    setInterval(changeBackground, 3000);

});

