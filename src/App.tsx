/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import MobileFAB from './components/MobileFAB';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased text-gray-900 selection:bg-brand-green selection:text-brand-blue">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
        <MobileFAB />
      </div>
    </BrowserRouter>
  );
}