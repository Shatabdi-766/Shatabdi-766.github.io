document.getElementById('whatsappForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create WhatsApp message
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

        // Log the WhatsApp link for debugging
        console.log(`WhatsApp Link: https://wa.me/+8801990657280?text=${whatsappMessage}`);

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/+8801990657280?text=${whatsappMessage}`, '_blank');
    });