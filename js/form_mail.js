<div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
    <h4 class="mb-4">Get in Touch – Let’s Start the Conversation!</h4>
    <form id="gmailForm">
        <div class="row g-3">
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="Your Name" required>
                    <label for="name">Your Name</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="Your Email" required>
                    <label for="email">Your Email</label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="text" class="form-control" id="subject" placeholder="Subject" required>
                    <label for="subject">Subject</label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 100px" required></textarea>
                    <label for="message">Message</label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary py-3 px-5" type="submit">Send Message</button>
            </div>
        </div>
    </form>
</div>

<script>
    document.getElementById('gmailForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create email body
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`;

        // Log the email link for debugging
        console.log(`Email Link: mailto:sahashatabdi13@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`);

        // Open Gmail with pre-filled email
        window.open(`mailto:sahashatabdi13@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`, '_blank');
    });
</script>