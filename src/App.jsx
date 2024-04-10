
import Header from './Component/Header'
import { Route,Routes } from 'react-router-dom'
import Service from './Component/Service'
import AutherCheckList from './Component/AutherCheckList'
import Contact_1 from './Component/Contact_1'
import Blog from './Component/Blog'
import Home_1 from './Component/Home_1'
import Faq_1 from './Component/Faq_1'
import Footer from './Component/Footer'
import Craw from './Component/DaisyUi/Craw'
import Rating from './Component/DaisyUi/Rating'

function App() {
  return (
 <>
 <Header/>
 <Craw/>

<Routes>
  <Route path = '/' element = {<Home_1/>} />
  <Route path = '/contact' element={<Contact_1/>}/>
  <Route path = '/service' element={<Service/>}/>
  <Route path = '/auther' element={<AutherCheckList/>}/>
  <Route path = '/blog' element={<Blog/>}/>
  <Route path ='/fq'  element = {<Faq_1/>}/>
  
</Routes>



<Footer/>

{/* <div className="text-center"><Rating/></div> */}
 </>
  )
}

export default App
