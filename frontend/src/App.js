import './App.css';
import { Route } from "react-router-dom";
import HomePage from './Components/Home/HomePage';
import ChatPage from './Components/Chat/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
