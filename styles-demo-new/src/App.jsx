// const App = () => {
//   const headingStyle = {
//     color: 'blue',
//     fontSize: '24px',
//     textAlign: 'center',
//   };

//   return (
//     <div>
//       <h1 style={headingStyle}>Inline Styles</h1>
//       <p style={{ color: 'green' }}>This is a green paragraph.</p>
//     </div>
//   );
// };

// export default App;


// import './Card.module.css';

// const App = () => {
//   return (
//     <div>
//       <h1 className="external-heading">External CSS Styles</h1>
//     </div>
//   );
// };

// export default App;



import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <Card
        displayName={"Mike Smith"}
        bio={"Head of Security at Startup.io and avid conference speaker."}
      />
      <Card
        displayName={"John Michaelson"}
        bio={"Passionate Blockchain Engineer."}
      />
      <Card
        displayName={"Amanda Johnson"}
        bio={"COO at Noodle. Passionate about providing our clients with the best possible services."}
      />
      <Card
        displayName={"Gary McKnight"}
        bio={"Front-End Tech Lead & Book Writer."}
      />
    </div>
  );
}

export default App;