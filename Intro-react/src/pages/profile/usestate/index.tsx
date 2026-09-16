import { useState } from 'react';

export default function UseState() {
  const [quantity, setQuantity] = useState<number>(0);
  // quantity = value dari useState-nya
  // setQuantity = function untuk merubah quantity-nya atau useState-nya

  // const handleDecreaseQuantity = () => {
  //     setQuantity((prevVal) => prevVal - 1);
  // }

  // const handleIncreaseQuantity = () => {
  //     setQuantity((prevVal) => prevVal + 1);
  // }

  const min = 0;
  const max = 10;

  const maxCounter = () => {
    if (quantity < max) {
      setQuantity((prevVal) => prevVal + 1);
    } else if (quantity >= max) {
      alert('You have reached maximum of quantity');
    }
  };

  const minCounter = () => {
    if (quantity > min) {
      setQuantity((prevVal) => prevVal - 1);
    } else if (quantity <= min) {
      alert('The quantity can not be less than 0');
    }
  };

  return (
    <>
    <h1 className='h-30 flex justify-center items-center text-black'>Choose a quantity between 0 - 10</h1>
      <div className="flex justify-center p-10">
        <div className="flex items-center gap-3">
          <button
            onClick={minCounter}
            className={`btn ${quantity === min ? 'btn-error' : 'btn-success'} w-5 h-5`}
          >
            -
          </button>
          <span className="text-black font-bold">{quantity}</span>
          <button
            onClick={maxCounter}
            className={`btn ${quantity === max ? 'btn-error' : 'btn-success'} w-5 h-5`}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
