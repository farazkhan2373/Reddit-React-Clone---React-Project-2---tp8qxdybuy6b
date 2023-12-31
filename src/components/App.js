import { Heading } from "@chakra-ui/react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityPage } from "../pages/CommunityPage/CommunityPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SubmitPostPage } from "../pages/SubmitPostPage/SubmitPostPage";
import { EditPostPage } from "../pages/EditPostPage/EditPostPage";

function App() {
  return (
    
    <div>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community/:channelId" element={<CommunityPage />} />
        <Route path="/submitpost" element={<SubmitPostPage />} />
        <Route path="/editpost" element={<EditPostPage />} />
       </Routes>
    </div>
    
  )
}

export default App;
