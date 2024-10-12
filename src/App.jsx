import { Provider } from "react-redux";
import "./App.css";

import { store as pureReduxStore } from "./components/redux/store/redux.store";
import { store as rtkStore } from "./components/redux-toolkit/store/rtk.store";
import { store as rtkQueryStore } from "./components/redux-toolkit-query/store/rtk-query.store";

import Posts from './components/redux/Posts.jsx'; // Assuming the component is named 'Posts'
import RtkPosts from "./components/redux-toolkit/Posts.jsx"
import RtkQueryPosts from "./components/redux-toolkit-query/Posts.jsx"

function App() {
  return (
    <>
    <Provider store={pureReduxStore}>
      <Posts />
    </Provider>
    <Provider store={rtkStore}>
      <RtkPosts />
    </Provider>
    <Provider store={rtkQueryStore}>
      <RtkQueryPosts />
    </Provider>
  </>
    
  );
}

export default App
