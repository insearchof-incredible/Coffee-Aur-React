import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-2xl rounded-xl p-6 bg-gray-800 text-orange-500">
        <h1 className="text-3xl font-bold text-center text-white mb-6">🔐 Password Generator</h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 text-lg bg-white text-black outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 hover:bg-blue-800 transition text-white px-4 py-2 font-medium"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="length" className="text-white font-medium">
              Length: <span className="text-orange-400">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer accent-orange-500"
              id="length"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer"
            />
            <label htmlFor="numberInput" className="text-white">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500 cursor-pointer"
            />
            <label htmlFor="characterInput" className="text-white">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
