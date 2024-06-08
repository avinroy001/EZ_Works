import logo from "./assets/EZlogo.png"
import './App.css';
import Email from "./Email.jsx";
import img1 from "./assets/presentation1.png";
import img2 from "./assets/audio2.png";
import img3 from "./assets/translation3.png";
import img4 from "./assets/graphic4.png";
import img5 from "./assets/research5.png";
import img6 from "./assets/data6.png";
import Card from "./Card.jsx";
function App() {
  let dataArr=[{pic:img1,title:"Presentation Design",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"}
  ,{pic:img2,title:"Audio - Visual Production",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img3,title:"Translation Services",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img4,title:"Graphic Design",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img5,title:"Research and Analytics",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img6,title:"Data Processing",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"}]
  return (
    
    <div className="mainWrapper">

    <div className="leftWrapper">
      <div>
        <img src={logo} alt="logo" width={300}/>
        <p className="leftText">Suite Of Business Support Services</p>
        <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        </div>
      </div>
      <Email/>
    </div>

      <div className="cards">
        {dataArr.map((ele,idx)=>
          <Card pic={ele.pic} title={ele.title} text={ele.text}/>
        )}
      </div>
    </div>
  );
}

export default App;
