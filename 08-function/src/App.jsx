const App = () => {

  const pageScrolling =(e)=>{
if(e>0){
  console.log("down direction");
  
}else{
  console.log('up direction');
  
}
  }

  return (
    <div>
      <h1>Hello guys</h1>

      <button onClick={() => {
        console.log("button clicked");
      }}>
        Click me
      </button>

<form
  onSubmit={function(e) {
    e.preventDefault();
    console.log("form submitted");
  }}
>
        <input onChange={function(elem){
console.log(elem.target.value);

        }} type="text" placeholder="enter info" />
        <button type="submit">Submit</button>
      </form>
      <div onWheel={(e)=>{
 pageScrolling(e.deltaY)
      }
            
      }>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;