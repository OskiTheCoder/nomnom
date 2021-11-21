import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('');
  const getHello = async () => {
    try {
      const response = await fetch(
        'https://us-central1-nomnom-13317.cloudfunctions.net/test/hithere'
      );
      const jsonData = await response.json();
      console.log(jsonData);

      setHello(jsonData.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getHello();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        hello there and {hello} !!! {`🤓`}
      </header>
    </div>
  );
}

export default App;
