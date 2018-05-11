import App from './App.js'
import './css/Styles.css'
import favicon from './assets/favicon-256.png'
import { Mount, Update, toggleClass, smoothScroll, setMinHeight, setFavicon, showPicker, hidePicker } from './Helpers'
import { Work, Projects, Writing, Skills, Aboutme } from './Content'

//Parse work content
const work = []
Work.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <h4>${e.subtitle}</h4>
    <p>${e.body}</p>
    `
    work.push(x)
})

//Parse projects content
const projects = []
Projects.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    projects.push(x)
})

//Parse writing content
const writing = []
Writing.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    writing.push(x)
})

//Parse skills content
const skills = []
Skills.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
    `
    skills.push(x)
})

//Parse aboutme content
const aboutme = []
Aboutme.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <div>${e.body}</div>
    `
    aboutme.push(x)
})

document.onreadystatechange = () => {
    switch (document.readyState) {
        case 'loading':
            //
            break;
        case 'interactive':
            Mount(App(), 'app')
            setFavicon(favicon)
            Update('mainContent', work.join(' '))
            window.addEventListener('popstate', (e) => {
                e.preventDefault()
                switch (window.location.hash) {
                    case '#work':
                        hidePicker()
                        Update('mainContent', work.join(' '))
                        toggleClass('tab', 'is-active', 'work_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#projects':
                        hidePicker()
                        Update('mainContent', projects.join(' '))
                        toggleClass('tab', 'is-active', 'projects_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#writing':
                        hidePicker()
                        Update('mainContent', writing.join(' '))
                        toggleClass('tab', 'is-active', 'writing_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#skills':
                        hidePicker()
                        Update('mainContent', skills.join(' '))
                        toggleClass('tab', 'is-active', 'skills_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#aboutme':
                        hidePicker()
                        Update('mainContent', aboutme.join(' '))
                        toggleClass('tab', 'is-active', 'aboutme_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#navigate':
                        showPicker()
                        break;
                    default:
                        //
                        break;
                }
            })
            break
        case 'completed':
            //
            break
        default:
            //
            break;
    }
}