import React from "react"
import MagendDrawer from './components/drawer/managed-drawer'
import Layout from "./components/layout/layout"
import Search from "./components/search/search";




const App: React.FC = () => {

  
  return (
    <>
      <Layout/>
      <Search/>
      <MagendDrawer/>
    </>
  );
}

export default App;
