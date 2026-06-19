// ==========================================
// 1. DYNAMIC SEARCH FILTER WITH ANIMATION
// ==========================================
function filterServices() {
    let input = document.getElementById('searchService') ? document.getElementById('searchService').value.toLowerCase() : '';
    let serviceGrid = document.querySelector('.service-grid');
    
    if (serviceGrid) {
        let items = serviceGrid.getElementsByTagName('div');
        for (let i = 0; i < items.length; i++) {
            let paragraphText = items[i].getElementsByTagName('p')[0] ? items[i].getElementsByTagName('p')[0].innerText.toLowerCase() : '';
            
            if (paragraphText.includes(input)) {
                // If it matches, show it and add the animation class
                items[i].style.display = "";
                items[i].classList.add('fade-in-element');
            } else {
                // Remove it when hidden so it re-animates next time
                items[i].style.display = "none";
                items[i].classList.remove('fade-in-element');
            }
        }
    }
}

// ==========================================
// 2. LIGHTBOX MODAL (For Gallery Page)
// ==========================================
function openLightbox(element) {
    let modal = document.getElementById("lightboxModal");
    let modalImg = document.getElementById("lightboxImg");
    modal.style.display = "flex";
    modal.classList.add('fade-in-element'); // Smooth fade for the pop-up image
    modalImg.src = element.src;
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

// ==========================================
// 3. FORM VALIDATION & MOCK AJAX SUBMISSION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            let nameInput = form.querySelector("input[type='text']");
            let messageInput = form.querySelector("textarea");
            
            if (nameInput.value.trim().length < 3) {
                alert("Please enter a valid name (at least 3 characters).");
                return false;
            }
            
            if (messageInput && messageInput.value.trim().length < 5) {
                alert("Your message must be slightly longer.");
                return false;
            }
            
            alert("Validating form details client-side...");
            
            setTimeout(() => {
                alert("Success! Your request has been sent dynamically. Thank you for choosing Galaxy Cuts!");
                form.reset(); 
            }, 1000);
        });
    }
});