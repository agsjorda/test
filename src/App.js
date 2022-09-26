import { Route, Routes } from "react-router-dom";
import CreateArticleScreen from "./screens/CreateArticleScreen";

import { TopScreen } from "./screens/TopScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopScreen />} />
      <Route path="article" element={<CreateArticleScreen />} />
    </Routes>
  );
}

export default App;
