import { Route, Routes } from "react-router-dom";
import Password from "./pages/password";
import Letter from "./pages/Letter";


function App() {
    return <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/letter" element={<Letter />} />
    </Routes>;
}

export default App;
