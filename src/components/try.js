// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
    constructor(props){
      super(props);
      this.state=false;
    }
    render() {
      return (<React.Fragment>
            <a href="#">Want to buy a new car?</a>
            {state&&<p onClick={this.setState(true)}>Call +11 22 33 44 now!</p>}
          </React.Fragment>);
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Message />, rootElement);
  
  console.log("Before click: " + rootElement.innerHTML);
  document.querySelector("a").click();
  console.log("After click: " + rootElement.innerHTML);