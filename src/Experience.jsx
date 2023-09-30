import './index.css'
import photo from './assets/checkmark.png'

function Experience() {
    return (
        <>
        <section id="experience">
            <div class="heading">Experience</div>
            <div class="experience_container">
                <div class="placeholder">
                    <h2>Programming Languages</h2>
                    <div class='box'>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>Javascript</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>Python</h3>
                                <p>Intermediate</p>
                            </div>
                        </div >
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>C++</h3>
                                <p>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="placeholder">
                    <h2>Frontend Development</h2>
                    <div class='box'>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>HTML</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>CSS</h3>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>React</h3>
                                <p>Basic</p>
                            </div>                            
                        </div>
                        <div class='list'>
                            <img src={photo} width='40px'/>
                            <div class='experience_text'>
                                <h3>Git</h3>
                                <p>Intermediate</p>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience