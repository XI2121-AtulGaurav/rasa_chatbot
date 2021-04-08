import FaqChatbot from "./Chatbot";
import Navbar from "../Layout/Navbar";
import Apply from './Apply';
function App() {
  return (
    <div className="App backgroundimage" >
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-4 px-3">

          </div>
            <Apply title="Introduction"/>
        </div>
      </div>
      <FaqChatbot />
    </div>
  );
}

export default App;
