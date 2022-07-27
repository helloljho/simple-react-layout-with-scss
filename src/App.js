import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageCta from './pages/PageCTA';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageOne" element={<PageOne />} />
        <Route path="/pageTwo" element={<PageTwo />} />
        <Route path="/pageThree" element={<PageThree />} />
        <Route path="/pageCTA" element={<PageCta />} />
      </Routes>
    </Layout>
  );
}

export default App;
