import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassBaseCom from './Components/ClassBaseCom';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Propsdemo from './Components/Propsdemo';
import Welcome from './Components/Welcome';
import FunctionalClick from './EventHandling/FunctionalClick';
import ClassClick from './EventHandling/ClassClick';
import EventBind from './EventHandling/EventBind';
import ParentComponent from './EventHandling/ParentComponent';
import UserGreeting from './ConditionalRendering/UserGreeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ClassBaseCom />
    <Message />
    <Counter />
    <Propsdemo name="Siv">
      <p>This is Props demo practice</p>
      </Propsdemo> 
    <Propsdemo name="Ram">
      <button>Action</button>
    </Propsdemo>
    <Propsdemo name="Jagadeesh">
    </Propsdemo>
    <Welcome name="Siv" />
    <Welcome name="Ram" />
    <Welcome name="Jagadeesh" />
    <FunctionalClick />
    <ClassClick />
    <EventBind />
    <ParentComponent />
    <UserGreeting />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
