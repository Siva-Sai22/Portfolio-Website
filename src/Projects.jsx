import './index.css'
import calculator from './assets/Calculator.png'
import etch from './assets/Etch a Sketch.png'
import rock from './assets/Rock paper scissors.png'

function Projects(){

    return(
        <>
        <section id='projects'>
            <div class='heading'>Projects</div>
            <div class='project-containers'>
                <div class='project-content'>
                    <img src={calculator} class='project-img'/>
                    <h2>Calculator</h2>
                    <div>
                        <button class='buttons' onClick={()=>location.href='https://github.com/Siva-Sai22/Calculator'}>Github</button>
                        <button class='buttons' onClick={()=>location.href='https://siva-sai22.github.io/Calculator/'}>Live Demo</button>
                    </div>
                </div>
                <div class='project-content'>
                    <img src={etch} class='project-img'/>
                    <h2>Etch a sketch</h2>
                    <div>
                        <button class='buttons' onClick={()=>location.href='https://github.com/Siva-Sai22/Etch-a-sketch'}>Github</button>
                        <button class='buttons' onClick={()=>location.href='https://siva-sai22.github.io/Etch-a-sketch/'}>Live Demo</button>
                    </div>
                </div>
                <div class='project-content'>
                    <img src={rock} class='project-img'/>
                    <h2>Rock Paper Scissors</h2>
                    <div>
                        <button class='buttons' onClick={()=>location.href='https://github.com/Siva-Sai22/Rock-Paper-Scissors'}>Github</button>
                        <button class='buttons' onClick={()=>location.href='https://siva-sai22.github.io/Rock-Paper-Scissors/'}>Live Demo</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects