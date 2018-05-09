import pic from './assets/ProfilePic.jpg'
import { Hero, Title } from './content'

const App = (props) => {
    return `
   <div class="mainContainer">
        <div class="topBar">
            <h2>MICHAEL BOUWER</h2>
        </div>
        <hr>
        <div class="hero">
           <div class="heroImage">
                <img class="profileImg" src="${pic}" />
            </div>
            <div class="heroCallout">
                <div class="callout">
                    <h2>${Title}</h2>
                    <p>${Hero}</p>
                    <span class="links"><p class="links"><a href="">Medium</a> | <a href="">LinkedIn</a> | <a href="">Email</a> </p></span>
                </div>
            </div>
        </div>
        <div class="tabs" id="tabs">
            <ul>
                <li><a href="#work" id="work_" class="tab">Work</a></li>
                <li><a href="#projects" id="projects_" class="tab">Projects</a></li>
                <li><a href="#writing" id="writing_" class="tab">Writing</a></li>
                <li><a href="#aboutme" id="aboutme_" class="tab">About Me</a></li>
            </ul>
        </div>
        <div class="mainContentSection">
            <div class="content" id="mainContent">
                
            </div>
        </div>
   </div>
`
}


export default App