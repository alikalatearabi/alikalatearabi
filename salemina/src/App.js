import React from 'react';

import Header from './components/Header1';
import Footer from './components/footer';
import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Grade from './components/Grade';
import Statement from './components/Statement';

import './components/css/components.css'
import './components/css/header.css'
import './components/css/footer.css'
import './components/css/policy.css'
import './components/css/about-us.css'
import './components/css/contact-us.css'
import './components/css/responsive.css'
import './components/css/HomePage.css'
import './components/css/grade.css'
import './components/css/statement.css'

import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
      <>
        <Header />
        <div className='route-wrapper'>
          <Switch>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/policy" component={Policy} />
            <Route path="/contact" component={Contact} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/grade" component={Grade} />
            <Route path="/statement" component={Statement} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </>
    );
}

export default App;