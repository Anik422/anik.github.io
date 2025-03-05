import { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Profile from './components/profile/profile';

// context
import DispatchContext from "./components/Context/DispatchContext";
import StateContext from "./components/Context/StateContext";
import initialstate from "./components/Context/initialstate";
import { useImmerReducer } from "use-immer";
import ReduceFunction from "./components/Context/reduce_function";

function App() {
  const [state, dispatch] = useImmerReducer(ReduceFunction, initialstate);

  // Apply dark mode class to document based on state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.darkMode);
  }, [state.darkMode]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="font-sans bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-800 text-black dark:text-white">
          <Navbar />
          <Profile />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App;