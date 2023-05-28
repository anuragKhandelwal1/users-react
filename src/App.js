import './App.css';
import { AddUser } from './Components/AddUser';
import { Provider } from 'react-redux';
import store from './redux-module/store';
import UsersList from './Components/UsersList';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AddUser/>
      <UsersList/>
      </Provider>
    </div>
  );
}

export default App;
