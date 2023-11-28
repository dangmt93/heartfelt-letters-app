import { Route, Routes } from "react-router-dom";
import Password from "./pages/Password";
import Letter from "./pages/Letter";
import Test from "./pages/Test";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Password />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}

export default App;
