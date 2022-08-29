import React from 'react';

function ContactMe() {
    return (
        <section>
            <h3>Contact Me</h3>
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name"></input>
                    </li>
                    <li>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="user_email"></input>
                    </li>
                    <li>
                        <label for="msg">Message:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                    <li class="button">
                        <button type="submit">Send your message</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default ContactMe