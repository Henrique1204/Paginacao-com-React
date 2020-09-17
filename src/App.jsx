import React, {Fragment} from 'react';
import Header from "./Componentes/Header.jsx";
import Main from "./Componentes/Main.jsx";
import Footer from "./Componentes/footer.jsx";
import './Css/index.css';

export default () => {
  return (
    <Fragment>
        <Header />
  
        <Main />

       <Footer />
    </Fragment>
  );
}
