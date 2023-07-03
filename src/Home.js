const Home = () => {
  const handleClick = (name, e) =>{
    console.log("hello " + name, e);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(e) => handleClick("Tal", e)}>Click me</button>
    </div>
  );
}
   
export default Home;