import { Routes, Route } from 'react-router-dom';

import AllMeetUps from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetUp from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout"



function App() {
  return (
<Layout>
<Routes>
   <Route path='/' element={<AllMeetUps/>}/>
   <Route path='/favourites' element={<Favourites/>} />
   <Route path='new-meetup' element={<NewMeetUp/>} />
   </Routes>
</Layout>
  );
}

export default App;
