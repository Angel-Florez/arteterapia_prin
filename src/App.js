import "./styles.css";
import Diario from "./Pages/Mi_Diario/Diario.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar";
import Arteterapia from "./Pages/Arteterapia/Arteterapia.js";
import Caretips from "./Pages/Caretips/Caretips.js";
import Perfil from "./Pages/Perfil/Perfil1.js";
import Emociones from"./Pages/Emociones/Emociones.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Arteterapia} />
            <Route path="/Arteterapia" component={Arteterapia} />
            <Route exact path="/" component={Caretips} />
            <Route path="/Caretips" component={Caretips} />
            <Route exact path="/Mi_Diario" component={Diario} />
            <Route path="/Perfil" component={Perfil} />
            <Route exact path="/" component={Emociones} />
            <Route path="/Emociones" component={Emociones} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
