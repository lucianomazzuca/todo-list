
function component() {
    const element = document.createElement('div')
    element.innerText = 'Webpack test'

    return element
}

document.body.appendChild(component());