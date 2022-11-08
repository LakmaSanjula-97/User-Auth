import './App.css';
import { Route } from "react-router-dom";
import HomePage from './Components/Home/HomePage';
import StaffRegister from './Components/Home/StaffRegister';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import ManagerDashboard from './Components/Dashboard/ManagerDashboard';
import WorkerDashboard from './Components/Dashboard/WorkerDashboard';
import FileUploadPage from './Components/File/FileUploadPage';
import SaveMessagePage from './Components/Messages/SaveMessagePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/staffregister" component={StaffRegister} />
      <Route path="/message" component={SaveMessagePage} />
      <Route path="/fileUpload" component={FileUploadPage} />
      <Route path="/adminDashboard" component={AdminDashboard} />
      <Route path="/managerDashboard" component={ManagerDashboard} />
      <Route path="/workerDashboard" component={WorkerDashboard} />
    </div>
  );
}

export default App;
