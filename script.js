@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

/* Fonte personalizada opcional */
@font-face {
  font-family: 'CerebriSansBold';
  src: url('Cerebri-Sans-Bold.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'CerebriSansBold', sans-serif;
  background: url('fundo.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Glassmorphism Container */
.container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  padding: 40px;
  width: 90%;
  max-width: 420px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

h1 {
  text-align: center;
  color: #fff;
  margin-bottom: 24px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

input,
textarea {
  margin-bottom: 16px;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  outline: none;
  transition: border-color 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #eee;
}

input:focus,
textarea:focus {
  border-color: #ff3f3f;
  background: rgba(255, 255, 255, 0.3);
}

button {
  background-color: #ff3f3f;
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

button:hover {
  background-color: #d60000;
  transform: scale(1.02);
}
