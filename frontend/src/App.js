import './App.css';
import { Route } from "react-router-dom";
import HomePage from './Components/Home/HomePage';
import ChatPage from './Components/Chat/ChatPage';
import Chat2 from './Components/Chat/Chat2';
import StaffRegister from './Components/Home/StaffRegister';
import Chat3 from './Components/Chat/Chat3';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/staffregister" component={StaffRegister} />
      <Route path="/chats" component={ChatPage} />
      <Route path="/chat2" component={Chat2} />
      <Route path="/chat3" component={Chat3} />
    </div>
  );
}

export default App;
