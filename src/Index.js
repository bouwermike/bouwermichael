import App from './App.js'
import './css/Styles.css'
import { Mount, Update, toggleClass, smoothScroll, setMinHeight } from './Helpers'
import { Work, Projects, Writing, Aboutme } from './Content'

//Parse work content
const work = []
Work.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
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

//Parse aboutme content
const aboutme = []
Aboutme.forEach(e => {
    let x = `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
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
            Update('mainContent', work.join(' '))
            window.addEventListener('popstate', (e) => {
                e.preventDefault()
                switch (window.location.hash) {
                    case '#work':
                        Update('mainContent', work.join(' '))
                        toggleClass('tab', 'is-active', 'work_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#projects':
                        Update('mainContent', projects.join(' '))
                        toggleClass('tab', 'is-active', 'projects_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#writing':
                        Update('mainContent', writing.join(' '))
                        toggleClass('tab', 'is-active', 'writing_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
                        break;
                    case '#aboutme':
                        Update('mainContent', aboutme.join(' '))
                        toggleClass('tab', 'is-active', 'aboutme_')
                        setMinHeight('mainContent', "800px")
                        smoothScroll(document.getElementById('tabs'))
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