import { Route, Routes } from "react-router-dom";
import { DetailScreen } from "./screens/DetailScreen";

import { TopScreen } from "./screens/TopScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopScreen />} />
      <Route path="article" element={<DetailScreen />} />
    </Routes>
  );
}

export default App;
