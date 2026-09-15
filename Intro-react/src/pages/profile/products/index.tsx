export default function ProductPage() {
  return (
  <>
  <h1 className=
  "text-7xl text-white font-serif flex justify-center mt-20 bg-yellow-400" 
  >ITU GAK RISPEK BANGET WOK!</h1>
  <h1 className="text-5xl text-red-500 bg-white font-bold flex justify-center items-center italic">Prabowo menasehati Subianto</h1>

  {/* {Grid} */}
  <div className="grid grid-cols-3 mt-4">
    <div>Nomor 1</div>
    <div className="bg-pink-600 col-span-2">Nomor 2</div>
    <div>Nomor 3</div>
  </div>
  
  {/* {Flexbox} */}
    <div className="bg-red-600 h-[50vh] flex justify-center items-center gap-2">
        <h1 className="text-3xl font-bold text-white">WKWKWK</h1>
        <h1 className="text-3xl font-bold">WKWKWK</h1>
        <h1 className="text-3xl font-bold text-white">WKWKWK</h1>
  </div>

  {/* {Responsive} */}
  <h1 className="text-green-800 font-bold md:text-3xl md:text-blue-500 lg:text-2xl lg:font-light lg:text-red-600">OKE GAS OKE GAS</h1>
  </>
  );
}
