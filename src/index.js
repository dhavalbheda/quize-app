import React from 'react';
import ReactDOM from 'react-dom';

import Body from './Component/Body';
import Footer from './Component/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';



const Main = ()=>{
    return(<>
        <Body/>
        <Footer/>
    </>);
}

ReactDOM.render(<Main/>,document.getElementById('root'));