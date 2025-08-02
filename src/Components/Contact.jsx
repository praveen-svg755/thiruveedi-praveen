import '../Styles/contact.css'

const Contact = () => {
    return (
        <div>
            <div class="contact-div" id="contact">
                <div class="social-media">

                    <a href="https://www.linkedin.com/in/santhosh-thiruveedi-59932b292/" aria-label="LinkedIn">LinkedIn</a>
                    <a href="mailto:santhoshthiruveedi@gmail.com" aria-label="LinkedIn">Email</a>
                    <a href="https://wa.me/916301612938" aria-label="GitHub">Whats App</a>
                   
                </div>
                <section>
                    <h2>Contact Me</h2>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="d4e98f30-a359-491b-92e4-920cb85a9a91" />
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default Contact