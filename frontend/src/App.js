import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 请求 Flask 后端的消息
    fetch('http://127.0.0.1:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;