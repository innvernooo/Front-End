import { useState } from 'react';

export default function FillBio() {
  const [showText, setShowText] = useState('');

  return (
    <>
      <div className="h-20 flex items-center justify-center">
        <label htmlFor="showText" className="text-black font-bold">
          {showText}
        </label>
      </div>
      <div className="flex justify-center items-center">
        <textarea
          value={showText}
          onChange={(e) => setShowText(e.target.value)}
          className="textarea bg-white text-black border-2 border-red-600"
          placeholder="Type your bio..."
        ></textarea>
      </div>
    </>
  );
}
