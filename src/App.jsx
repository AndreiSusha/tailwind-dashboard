import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import CustomersPage from "./pages/CustomersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import FeedbackPage from "./pages/FeedbackPage"
import ProfilePage from "./pages/ProfilePage"
import SupportPage from "./pages/SupportPage"

import Sidebar from "./components/global/Sidebar"

function App() {

  return (
   <div className='flex h-screen bg-gray-200 text-gray-700 overflow-hidden'>

    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
   </div>
  )
}

export default App
