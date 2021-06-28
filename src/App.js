import './App.css';
import Profile from './profile/Profile';
import photo from './profile/John-Doe.jpg';

const App = () => {
  const user = {
    fullName: "John Doe",
    profession: "Full-Stack JS Developer",
    bio: `I'm a full stack developer with more than two decades experience.I code
     mostly in JavaScript but I have a good experience with PHP and Python.`,
  }

  // Alert message
  const handleName = message => alert(message);

  return (
    <div className="App">
      <Profile fullName={user.fullName} profession={user.profession} bio={user.bio} handleName={handleName}>
        <img src={photo} alt="john doe" />
      </Profile>
    </div>
  );
}

export default App;
