import './index.css'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'

function Contact(){
    return(
        <>
        <div id='contact'>
            <div class="heading">Contact Me</div>
            <div class="contact-container">
                <div class="contact-contents">
                    <img src={gmail} width='40px' class="contact-image"/>
                    <a>kollakotasivasai@gmail.com</a>
                </div>
                <div class="contact-contents">
                    <img src={linkedin} width='40px' class="contact-image"/>
                    <a href='https://www.linkedin.com/in/kollakota-siva-sai-02b65a258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>LinkedIn</a>
                </div>
                <div class="contact-contents">
                    <img src={twitter} width='80px' class="contact-image"/>
                    <a href='https://x.com/Siva_Sai_05?s=08'>Siva_Sai_05</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact