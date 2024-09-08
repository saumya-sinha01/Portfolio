 
///////////////////////////////////////////////////////////// TYPEWRITER EFFECT ON NAME 

    document.addEventListener('DOMContentLoaded', function () {
        const typewriterElement = document.getElementById('typewriter');
        const typingDuration = 5000; // Duration of the typing animation in milliseconds
        const pauseDuration = 5000; // Duration of the pause between cycles in milliseconds
    
        function startTypingAnimation() {
            typewriterElement.style.animation = `typing ${typingDuration}ms steps(30, end)`;
            typewriterElement.style.animationPlayState = 'running';
        }
    
        function resetAnimation() {
            typewriterElement.style.animation = 'none';
            typewriterElement.offsetHeight; 
            typewriterElement.style.animation = `typing ${typingDuration}ms steps(30, end)`;
        }
    
        function handleAnimation() {
            startTypingAnimation();
            setTimeout(() => {
                typewriterElement.style.animationPlayState = 'paused';
                setTimeout(() => {
                    resetAnimation();
                    setTimeout(handleAnimation, pauseDuration);
                }, 1000);
            }, typingDuration);
        }
    
        handleAnimation();
    });



    /////////////////////////////////////////////// SLIDESHOW
    

    let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize first slide
showSlide(slideIndex);

// Optional: Set up automatic slide transition
setInterval(nextSlide, 5000); // 5 seconds



    //////////////////////////////////////// DOWNLOAD CV FUNCTION
    

    document.getElementById("downloadCvBtn").addEventListener("click", function() {
        const link = document.createElement('a');
        link.href = 'assets/my_CV.pdf'; // Path to PDF file
        link.download = 'Saumya_Sinha_CV.pdf'; // The name of the file to be downloaded
        link.click();
    });
    


    /* While uploading pdf, make sure to rename it as my_CV.pdf and upload that pdf under assets folder 
        by deleting the previously uploaded my_CV.pdf file */


