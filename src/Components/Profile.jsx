import React from 'react'
import '../Styles/profile.css'

const Profile = () => {
    return (
        <div>
            <div class="image-div">
                <div class="image">

                    <img id="profile-img" src="/assets/Myimage.jpg" alt="Profile image" />

                </div>
                <section id="home">
                    <p id="typing-text">Hi, I'm <span class="web-dev">THIRUVEEDI SANTHOSH</span></p>


                    <p class="scroll-eff">
                        I am a,
                        <span>
                            <span>UI/UX DESIGINER</span>
                            <span>GRAPHIC DESIGINER</span>
                            <span>UI/UX DESIGINER</span>
                            <span>THUMBNAIL DESIGNER</span>
                            <span>SOUND ENGINEERING</span>
                        </span>
                    </p>
                </section>
            </div>


           

        </div>
    )
}

export default Profile