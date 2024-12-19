import { BrowserRouter,  Routes } from "react-router";
import { Route } from "react-router";
import ViewData from "./pages/ViewData";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";
import SingleViewData from "./pages/SingleViewData";
import FavoriteData from "./pages/FavoriteData";
import PopupModal from "./componants/PopupModal";

function App() {

  return (
    <>
      <PopupModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewData />}></Route>
          <Route path="/favorite" element={<FavoriteData />}></Route>
          <Route path="/add" element={<AddData />}></Route>
          <Route path="/edit/:id" element={<EditData />}></Route>
          <Route path="/singleView/:id" element={<SingleViewData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
