import React from 'react'
import '../Styles/profile.css'

const Profile = () => {
  return (
    <div>
        <div class="image-div">
            <div class="image">
                
                <img  id="profile-img" src="\public\assets\Photos\image.jpg" alt="" />
            </div>
            <section id="home">
                <p id="typing-text">Hi, I'm <span class="web-dev">THIRUVEEDI PRAVEEN</span></p>
              
            </section>
              <p class="scroll-eff">
                    I am a,
                    <span>
                        <span>CODER</span>
                        <span>DEVELOPER</span>
                        <span>PROGRAMMER</span>
                        <span>DESIGNER</span>
                        <span>FREELANCER</span>
                    </span>
                </p>
        </div>

        
        <div class="tag-list">
            <div class="inner">
                <div class="tag">html</div>
                <div class="tag">css</div>
                <div class="tag">javaScript</div>
                <div class="tag">react.js</div>
                <div class="tag">tailwind</div>
                <div class="tag">c</div>
                <div class="tag">python</div>
                <div class="tag">java</div>
                <div class="tag">sql</div>
                <div class="tag">photoshop</div>
            </div>
            <div class="fade"></div>
        </div>


    </div>
  )
}

export default Profile