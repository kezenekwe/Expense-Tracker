import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    // global provider 
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

// command palette ctrl + p
// highlight same word command + d
// set up multiple cursors alt + click
// cut line command + x
// move line option + up/down
// highlight line shift + command + left/right
// hightlight word by word shift + control + left/right
// outdent shift tab