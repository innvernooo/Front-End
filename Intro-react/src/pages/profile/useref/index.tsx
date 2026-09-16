import { useRef } from "react";

export default function UseRef() {
    const inputUsername = useRef<HTMLInputElement>(null);
            const inputPassword = useRef<HTMLInputElement>(null);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputUsername?.current?.value);
    console.log(inputPassword?.current?.value);
  };

    return (
        <>
        <h1 className="h-10 flex justify-center items-center bg-amber-900 text-2xl font-bold">Form Pengisian Random Input</h1>
        <form onSubmit={handleRegister} className="flex flex-col items-center gap-3 py-10">
            <input type="text" placeholder="Masukkan Username" className="input bg-white text-black border-3 border-black" ref={inputUsername}/>
            <input type="password" placeholder="Masukkan Password" className="input bg-white text-black border-3 border-black" ref={inputPassword}/>
            <button className="btn btn-soft btn-primary bg-black text-yellow-400">Submit</button>
        </form>
        
        </>
    );
}