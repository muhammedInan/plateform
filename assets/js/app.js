import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { HashRouter, Switch, Route} from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
// any CSS you import will output into a single css file (app.css in this case)
//import '../css/app.css';
require("../css/app.css");

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello World');

const App = () => {
    return (
        <HashRouter>
            <Navbar />

            <main className="container pt-5">
                <Switch>
                    <Route path="/customers" component={CustomersPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
                
            </main>
        </HashRouter>
    );
};

const rootElement = document.querySelector("#app");
ReactDom.render(<App />, rootElement);
