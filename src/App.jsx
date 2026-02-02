import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";
import FastTransaction from "./components/FastTransaction";
import SecurePayments from "./components/SecurePayments";
import VideoComponent from "./components/VideoComponent";

const App = () => {
  
  return ( 
    <div>
       
      <BrowserRouter>
        <Routes>
          <Route path="/videopage" element={<>
              <Navbar color='bg-blue-50'/>
              <FirstSection />
               <div className="sticky top-0 z-1000"><Navbar color='bg-gray-50'/></div>
              <SecondSection />
              <ThirdSection />
              <FourthSection />
              <VideoComponent />
              <FifthSection />
              <Footer />
          </>} />

          <Route path="/fast-transaction" element={<>
              <Navbar color='bg-blue-50'/>
              <FirstSection />
              <div className="sticky top-0 z-1000 "><Navbar color='bg-gray-50'/></div>
              <SecondSection />
              <FastTransaction />
              <FourthSection />
              <FifthSection />
              <Footer />
          </>} />
          <Route path="/secure-payments" element={<>
              <Navbar color='bg-blue-50'/>
              <FirstSection />  
               <div className="sticky top-0 z-1000"><Navbar color='bg-gray-50'/></div>
              <SecondSection />
              <SecurePayments />
              <FourthSection />
              <FifthSection />
              <Footer />
          </>} />
          <Route path="/" element={
            <> 
              <Navbar color='bg-blue-50'/>
              <FirstSection />   
               <div className="sticky top-0 z-1000"><Navbar color='bg-gray-50'/></div> 
              <SecondSection />
              <ThirdSection />
              <FourthSection />
              <FifthSection />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
 
    
    </div>
  );
};

export default App;
