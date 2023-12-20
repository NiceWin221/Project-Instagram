import { useRef, useEffect } from "react";

export default function Message({
  inputValue,
  messages,
  selectedProfile,
  handleInputChange,
  handleKeyPress,
  initialAccounts,
}) {
  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  // Function to scroll the chat container to the bottom
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useEffect to scroll to the bottom when component mounts or messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getUsername = () => {
    const selectedAccount = initialAccounts.find((account) => account.profile === selectedProfile);
    return selectedAccount ? selectedAccount.username : '';
  }

  return (
    <div className="direct-chat">
      <div className="direct-chat-navbar">
        <img src={selectedProfile} alt="Selected Profile" />
        <p>{getUsername()}</p>
        <i className="fa-solid fa-phone" style={{ marginLeft: 'auto' }}></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-circle-info" style={{ marginRight: '20px' }}></i>
      </div>
      <div className="direct-send-message" ref={chatContainerRef}>
        <div className='message-container'>
          {messages.map((message, index) => (
            <div key={index} className="message" ref={index === messages.length - 1 ? lastMessageRef : null}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="direct-keyboard">
        <div className="direct-keyboard-details">
          <i className="fa-regular fa-face-smile"></i>
          <input
            type="text"
            placeholder='Send Message'
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            style={{ flex: 1, marginRight: '10px' }}
          />
          <div className='direct-keyboard-icon'>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-image"></i>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
