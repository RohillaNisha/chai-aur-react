function customRender(reactElement, container){
    // SIMPLY ADDING EVERY PROPERTY
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // MODULAR CODE WITH LOOP TO ADD PROPS

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // for loop to loop over the properties in props key
    for (const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a', // achor tag
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
