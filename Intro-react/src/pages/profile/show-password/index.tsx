import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

export default function ShowPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <form className="h-40 flex justify-center items-center">
        <input
          type={showPassword === true ? 'text' : 'password'}
          className="input validator bg-white border-black border-2 text-black"
          required
          placeholder="Password..."
        />
        {showPassword === true ? (
          <FaEyeSlash
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-155 text-black cursor-pointer"
          />
        ) : (
          <FaEye
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-155 text-black cursor-pointer"
          />
        )}
      </form>
    </>
  );
}
