01 React:  Learnings 
* Node.js is required to run javascript in browser
* React library has two parts - 1. ReactDOM - for web apps
                                2. React Native - for mobile apps
* npx - node package executor ( No need to install npm but is very heavy)
* create-react-app  -  A utility to create react apps. Very bulcky and is not used a lot these days.
* Vite & Parcel  -  Utilities that can be used to create react apps. 
* Vite - Provides Lighting fast development server by laveraging native ES modules in the browser. No building is required during development.
       - Provide HMR (Hot Module Replacement) No need to reload entire page to see changes.

* Parcel - No configuration required out of the box.
        - Automatically splits your code to optimize loading times and improve performance.
        - Also provide HMR.




02 Custom React:  Learnings
* Trying to build a very simple execution of React library.
* How React tries to create a tree for an element to render in the browser
  1. We create am element as an object of key value pairs with its properties, type, children etc.
                        E.g const reactElement = {
                        type: 'a', // achor tag
                        props: {
                            href: 'https://google.com',
                            target: '_blank'
                        },
                        children: 'Click me to visit google'
                    }

  2. This we get at the end dof the day via React. Now we need a method to render this element. So we can create a method that takes this element and append it to another container.
  3. In react the above syntax is converted from the Jsx syntax to create a DOM tree. This is done by bundler like Babel.
        Babel - Is a bundler which transpiles modern Js (ES6+) into a version compatible with older browsers. eg. Transforms JSX syntax for React.
  4. Using variables in JSX with {variable_name} is called "Evaluated expression" means this is not a javascript written in jsx rather a final evaluated outcome of a javascript code stored into a variable.
     So if else and other Javascript logics are not allowed in jsx. They are written in the function.