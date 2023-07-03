const Home = () => {
  const handleClick = (name) =>{
    console.log("hello " + name, e);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={() => handleClick("Tal")}>Click me</button>
    </div>
  );
}
   
export default Home;