import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <header>
        <h1>DIY Context API</h1>
        <p>
          A quick little tutorial for utilizing the useContext hook for state
          management.
        </p>
        <p>Please enjoy, and feel free to email me with feedback</p>
        <a href="mailto:whatsup@btwicode.com">whatsup@btwicode.com</a>
      </header>
      <section className="tutorial">
        <div className="step">
          <h1>
            <span>//</span> Step One: Creating Context
          </h1>
          <p className="note">
            * If you have not already created your React App using NPM or Yarn,
            do that now. *
          </p>
          <ul>
            <li>
              Here is where we are going to build the what we will call the{" "}
              <span>"Context Creator"</span>.
            </li>
            <li>
              In your <span>"src"</span> folder, create a new folder called{" "}
              <span>"contexts"</span>. Any context object you create will go in
              here.
            </li>
            <li>
              Inside this folder, create a new file called{" "}
              <span>"MyFirstContext.js"</span>.
            </li>
            <li>
              Open the <span>"MyFirstContext.js"</span> file and import the{" "}
              <span>"createContext"</span> function from React and create the
              context object. See code below.
            </li>
          </ul>
          <div className="code">
            <p>import {`{ createContext }`} from "react"</p>
            <p>const MyFirstContext = createContext();</p>
            <p>export default MyFirstContext;</p>
          </div>
        </div>
        <div className="step">
          <h1>
            <span>//</span> Step Two: Providing Data
          </h1>
          <p className="note">
            * Remember this is a basic tutorial, use naming conventions
            significant to your project *
          </p>
          <ul>
            <li>
              Now that we have created our context, lets import it into{" "}
              <span>"App.js"</span> and put it to use.
            </li>
            <li>
              Inside <span>"App.js"</span>, wrap all of your components / routes
              in the <span>"MyFirstContext.Provider"</span> component. This is
              something that is built in to the context object, don't be
              alarmed.
            </li>
            <li>
              Then we need to pass some prop values into our provider component.
              This may differ from project to project but basically, any state
              you'd like to pass in, and any function to change that would go
              here. We are going to build a shopping cart. See code below.
            </li>
          </ul>
          <div className="code">
            <p>import MyFirstContext from "./contexts/MyFirstContext.js"</p>
            <p>{`import react, { useState } from "react"`}</p>
            <p>{`function App() {`}</p>
            <p>const [products] = useState(ProductList);</p>
            <p className="note">
              // Here we are going to pretend <span>ProductList</span> is a file we
              have created elsewhere and imported to initialize state.
            </p>
            <p>const [cart, setCart] = useState([]);</p>
            <p>{`const stateFunction = (item) => {
              setCart([...cart, item]);
            };`}</p>
            <p>{`return {`}</p>
            <p>{`<MyFirstContext.Provider value={{ products, stateFunction }}>`}</p>
            <p>{`<Component />`}</p>
            <p>{`</MyFirstContext.Provider>`}</p>
          </div>
        </div>
        <div className="step">
          <h1>
            <span>//</span> Step Three: Consuming Data
          </h1>
          <p className="note">
            You can pick your friends, you can lead a camel to water, but you
            can't sneeze with your eyes open
          </p>
          <ul>
            <li>
              The home stretch here! Now that we are providing the values to our{" "}
              <span>Component</span>, lets hop on over into the{" "}
              <span>Component.js</span> file and import both the{" "}
              <span>MyFirstContext.js</span> and the <span>useContext</span>{" "}
              hook from React!
            </li>
            <li>
              Inside of our <span>Component</span>, call the{" "}
              <span>useContext</span> hook and pass in the value of our context
              creator file. This will return the two props set by the Provider
              function, we are going to go ahead and destructure those. See code
              below.
            </li>
          </ul>
          <div className="code">
            <p>import MyFirstContext from "./contexts/MyFirstContext.js</p>
            <p>{`import react, { useContext } from "react"`}</p>
            <p>const Component = () => {`{`}</p>
            <p>const {`{ products, addItem }`} = useContext(MyFirstContext);</p>
          </div>
        </div>
      </section>
      <footer>
        <h1>Congratulations!</h1>
        <p>
          Hurray! You are now consuming data set by your own Context API! Repeat
          this process for anything else that requires its own context. Please
          visit the React.js website below for more documentation.
        </p>
        <a href="https://reactjs.org/docs/context.html" target="blank">
          https://reactjs.org/docs/context.html
        </a>
      </footer>
    </div>
  );
}

export default App;
