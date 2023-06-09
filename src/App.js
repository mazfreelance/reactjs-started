// import logo from './logo.svg';
import './App.css';
import ClassEvent from './components/ClassEvent';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import Hello from './components/Hello'
import Message from './components/Message';
import Profile from './components/Profile';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message content="Lorem ipsum dolor sit amet labore et dolore magna aliqua."/>
      <Profile name="John">
        <h4>This is profile person</h4>
      </Profile>
      <Counter/>
      <Resume name="Latif"/>
      <FunctionEvent></FunctionEvent>
      <ClassEvent/>
    </div>
  );
}

export default App;
