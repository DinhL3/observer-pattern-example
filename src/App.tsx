import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import ParentComponent from './components/ParentComponent';
import CounterContextProvider from './store/counter-context';

function App() {
  return (
    <CounterContextProvider>
      <ButtonAppBar/>
      <ParentComponent />
    </CounterContextProvider>
  );
}

export default App;
