const registerBtn = document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

// Get the forms
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to show field-specific error messages
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    // Clear previous errors
    form.querySelectorAll('.field-error').forEach(error => error.remove());
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            // Create error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '12px';
            errorDiv.style.marginTop = '2px';
            errorDiv.textContent = `${input.placeholder} required`;
            
            // Insert after the input
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
            isValid = false;
        }
    });
    
    return isValid;
}

// Handle form submissions
function handleFormSubmission(form, formType) {
    if (!validateForm(form)) {
        return false; // Stop submission if validation fails
    }
    
    // If valid, proceed with success
    alert(`Your ${formType} has been successfully ${formType === 'signin' ? 'accessed' : 'created'}`);
    window.location.href = 'index.html';
}

// Attach event listeners to forms
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission(signInForm, 'signin');
    });
}

if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission(signUpForm, 'signup');
    });
}

// Real-time validation on input
document.addEventListener('input', (e) => {
    if (e.target.hasAttribute('required')) {
        const error = e.target.parentNode.querySelector('.field-error');
        if (e.target.value.trim() && error) {
            error.remove();
        }
    }
});
