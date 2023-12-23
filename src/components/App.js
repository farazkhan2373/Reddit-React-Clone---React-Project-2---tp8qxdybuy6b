import { Heading } from "@chakra-ui/react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityPage } from "../pages/CommunityPage/CommunityPage";

function App() {
  return (
    
    <div>
       <Routes>
        <Route path="/:channelId" element={<CommunityPage />} />
       </Routes>
    </div>
    
  )
}

export default App;
