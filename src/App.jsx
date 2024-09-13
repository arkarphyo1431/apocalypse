import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import smileImage from './smthOnUrFace.jpg' // Import the image

// First Page (Verification)
function VerificationPage() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOkClick = () => {
    const normalizedInput = inputValue.replace(/\s+/g, '').toLowerCase();
    const expectedName = "phuuphuuhtut";

    if (normalizedInput === expectedName) {
      navigate('/message-box'); // Navigate to the new message box page
    } else {
      alert('Name does not match. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sorry We Need to Verify Who You Are!</h1>
      <div className="box">
        <p className="text">We need to verify your identity. Enter your full name and click the OK button to proceed.</p>
        <input
          type="text"
          className="input-field"
          placeholder="name in all small letters"
          value={inputValue}
          onChange={handleInputChange}
          autoCorrect="off"
          autoCapitalize="none"
        />
        <button className="ok-button" onClick={handleOkClick}>OK</button>
      </div>
    </div>
  );
}

// Second Page (Message to Phuu)
function NextPage() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/cutest-smile')
  }

  return (
    <div className="container">
      <div className="box">
        <p className="text">
          When I first saw you, there was something on your face &#x1F606; {/* Laughing emoji */}
        </p>
        <button className="ok-button" onClick={handleButtonClick}>What it is?</button>
      </div>
    </div>
  )
}

// Third Page (Cutest Smile)
function CutestSmilePage() {
  const navigate = useNavigate(); // Import useNavigate to handle navigation

  const handleOkClick = () => {
    navigate('/final-message'); // Navigate to the FinalMessagePage
  }

  return (
    <div className="container">
      <h1 className="title">Cutest Smile I Can Ever Imagine</h1>
      {/* Image below the text */}
      <img src={smileImage} alt="Cute smile" className="cute-image" />
      {/* OK Button with black color */}
      <button className="ok-button-black" onClick={handleOkClick}>OK</button>
    </div>
  )
}

// Fourth Page (Message Box)
function MessageBoxPage() {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/next-page'); // Navigate to the next page after clicking OK
  }

  return (
    <div className="container">
      <h1 className="title">Hey Phuu !</h1> {/* Title with more space for emphasis */}
      <p className="subtitle">Is that you?</p> {/* Subtitle for the additional line */}
      <div className="box">
        <p className="text">Actually.. I got something to tell you</p>
        <button className="ok-button-black" onClick={handleOkClick}>OK</button>
      </div>
    </div>
  );
}

// Final Page (Final Message)
function FinalMessagePage() {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/'); // Navigate back to the main page (VerificationPage)
  }

  return (
    <div className="container">
      <div className="box">
        <p className="text">This awkwardness doesn't count next time we meet</p>
        <button className="ok-button-black" onClick={handleOkClick}>OK</button>
      </div>
    </div>
  );
}

// App Component (Router Setup)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerificationPage />} />
        <Route path="/message-box" element={<MessageBoxPage />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/cutest-smile" element={<CutestSmilePage />} />
        <Route path="/final-message" element={<FinalMessagePage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App
