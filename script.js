document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       1. SECURE FORM REGEX VALIDATION LOGIC
       --------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Block synchronous form submissions page flashing

            let isFormValid = true;

            // Extract form input context references
            const nameField = document.getElementById('fullName');
            const emailField = document.getElementById('emailAddress');
            const msgField = document.getElementById('messageText');

            // Error structural handles
            const nameErr = document.getElementById('nameError');
            const emailErr = document.getElementById('emailError');
            const msgErr = document.getElementById('messageError');

            // Standard human email pattern regex verification
            const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Processing individual Name Validation
            if (nameField.value.trim() === "") {
                nameErr.style.display = 'block';
                isFormValid = false;
            } else {
                nameErr.style.display = 'none';
            }

            // Processing explicit Email Syntax Verification
            if (!emailFormatRegex.test(emailField.value.trim())) {
                emailErr.style.display = 'block';
                isFormValid = false;
            } else {
                emailErr.style.display = 'none';
            }

            // Processing Message Area validation
            if (msgField.value.trim() === "") {
                msgErr.style.display = 'block';
                isFormValid = false;
            } else {
                msgErr.style.display = 'none';
            }

            // Trigger user confirmation frame on complete verification success
            if (isFormValid) {
                alert(`Form Validation Successful!\n\nName: ${nameField.value}\nEmail: ${emailField.value}`);
                contactForm.reset();
            }
        });
    }


    /* ---------------------------------------------------------
       2. DYNAMIC WORKSPACE RUNTIME CONTROL (DOM Arrays)
       --------------------------------------------------------- */
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoStream = document.getElementById('todoStream');

    // Modular generator function responsible for creating dynamic node items safely
    function processNewTaskSubmission() {
        const rawInputValue = todoInput.value.trim();

        // Prevent submitting empty tracking elements
        if (rawInputValue === "") {
            alert("Input field is blank. Please enter an active task assignment.");
            return;
        }

        // Creating structural layout elements inside live runtime memory pipelines
        const li = document.createElement('li');
        li.className = 'todo-node';

        const span = document.createElement('span');
        span.className = 'node-text';
        span.textContent = rawInputValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.setAttribute('aria-label', 'Remove item');

        // Register safe functional disposal handle immediately within memory bounds
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // Splice components together into layout trees and commit onto page view DOM context
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoStream.appendChild(li);

        // Reinitialize tracking buffers
        todoInput.value = "";
    }

    // Hooking element action binding events
    if (addTodoBtn && todoInput) {
        addTodoBtn.addEventListener('click', processNewTaskSubmission);

        // Allow quick task generation utilizing the native keyboard return key
        todoInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                processNewTaskSubmission();
            }
        });
    }

    // Hook standard deletion logic onto pre-rendered sample template element nodes
    const initialDeleteButtons = document.querySelectorAll('.todo-stream .btn-delete');
    initialDeleteButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

});