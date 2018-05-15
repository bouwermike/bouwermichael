//Used to initally mount the document fragment onto the document body
const Mount = (template, element) => {
    let frag = document.createRange().createContextualFragment(template)
    let root = document.getElementById(element)
    root.appendChild(frag)
}

//Used to update a given target node
const Update = (targetNodeID, content) => {
    let node = document.getElementById(targetNodeID)
    node.innerHTML = ''
    let frag = document.createRange().createContextualFragment(content)
    node.appendChild(frag)
}

//Used to easily toggle classes of grouped elements
const toggleClass = (elementClassSelector, elementClassToggle, targetElementID) => {
    let elements = document.getElementsByClassName(elementClassSelector)
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = elements[key];
            if (element.id == targetElementID) {
                element.classList.add(elementClassToggle)
            } else {
                element.classList.remove(elementClassToggle)
            }
        }
    }
}

//Used for smooth scrolling
const smoothScroll = (element) => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "nearest"
    })
}

//Set consistent height to stop jumping back and forth on scroll
const setMinHeight = (id, height) => {
    let el = document.getElementById(id)
    el.style.minHeight = height
}

//Used to dynamically set thee favicon, because reasons
const setFavicon = (source) => {
    let link = document.querySelector("link[rel*='icon']")
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon'; 
    link.href = source;
    document.getElementsByTagName('head')[0].appendChild(link);
}

//Used to control the visibility of the mobile picker
const showPicker = () => {
    let picker = document.getElementById('mobilePicker')
    let navButton = document.getElementById('navIcon')
    picker.style.width = "250px"
    navButton.classList.toggle('fa-bars')
    navButton.classList.toggle('fa-times')
}

const hidePicker = () => {
    let picker = document.getElementById('mobilePicker')
    picker.style.width = "0px"
    let navButton = document.getElementById('navIcon')
    navButton.classList.toggle('fa-bars')
    navButton.classList.toggle('fa-times')
}

//Update title on mobile
const updateTitle = (t) => {
    let title = document.getElementById('mainTitle')
    title.textContent = t
}

export { Mount, Update, toggleClass, smoothScroll, setMinHeight, setFavicon, showPicker, hidePicker, updateTitle }