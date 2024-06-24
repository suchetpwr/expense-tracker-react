 import './App.css';
 import { default as Header } from './components/Header.js';
 import { Balance } from './components/Balance.js';
 import { default as IncomeExpenses } from './components/IncomeExpenses.js';
 import { default as TransactionList } from './components/TransactionList.js';
 import { default as AddTransaction } from './components/AddTransaction.js';

 import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>        
    </GlobalProvider>
  );
}

export default App;
