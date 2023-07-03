import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('mario');
  const [age, setAge] = useState(30);
  const handleClick = (new_name, e) =>{
    setName(new_name);
    setAge(18);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } age is { age }</p>
      <button onClick={(e) => handleClick("Tal", e)}>Click me</button>
    </div>
  );
}
   
export default Home;