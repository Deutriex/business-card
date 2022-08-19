import React from 'react';
import Photo from './components/photo.js';
import Button from './components/button.js';
import Section from './components/section.js';
import Icon from './components/icon.js';

class App extends React.Component {
    render() {
      return (
      <div className="app">
        <Photo name="Iago Brunherotto" role="Full-stack developer" site="deutriex.com" />
        <div className="buttons">
          <Button text="Github" href="https://github.com/Deutriex" class="github github_icon"/>
          <Button text="LinkedIn" href="https://www.linkedin.com/in/iago-brunherotto-33017596/?locale=en_US" class="inked inked_icon"/>
        </div>
        <Section title="About" text="Skilled full-stack developer with 6+ years of hands-on experience on many stacks such as JavaScript, Node.Js, React.JS, Python, PHP, MySQL, AngularJS, and many others." />
        <Section title="Interests" text="I want to work for an American company with a decent pay remotely, from the comfort of my home." />
        <div className="buttons">
          <Icon class="github_icon" href="https://github.com/Deutriex" />          
          <Icon class="twitter_icon" href="https://twitter.com/Deutriex" />          
        </div>
      </div>
    );
    }
}


export default App;
