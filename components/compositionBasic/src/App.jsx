import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import ParagraphDirect from "./ParagraphDirectls.jsx";
import ParentCard from "./PropDrillingParentCard.jsx";



function App() {
  return (
    <><h1>Our First React App! 🔥 </h1>
    <ParagraphDirect username="vikas" country="India" offer={70} itemPrice={99} />
    <ParentCard fname="Vikas" lname="Wakde" />
    <Navbar/>
    <Form/>
    </>
  )
}

export default App;