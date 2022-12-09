import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import AD_LOGO from "./images/AD_LOGO.png";
import DChip from "./images/CardChip.png";
import Wifi from "./images/Wifi.png";
import MasterCard from "./images/MasterCard.png";
import DCI1 from "./images/DCI1.png";

const PaymentM = () => {
  const [number, setCardData] = useState({
    cardNumber:'',
    name:'',
    cvv:'',
    month:'',
    year:'',
    password:'',
  });
  const [realNumber, setRealNumber] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false) 

  const numberHandle = (event) => {
    const name = event.target.name
    const value = event.target.value
    if(name === 'cardNumber'){
      let cardValue = value.split("  -  ").join("").trim() || " ";
    if (!isNaN(cardValue)) {
      let finalValue = cardValue.match(/.{1,4}/g).join("  -  ");
      setCardData((prev) => {
        return {...prev,[name]:finalValue}
      });
      setRealNumber(finalValue.split("  -  ").join("").trim());
      setError(false);
    } else {
      setError(true);
    }
    }else{
      setCardData((prev) => {
        return {...prev,[name]:value}
      });
    }
  };
  return (
    <div className="container  min-h-[90vh] bg-slate-50 grid items-start px-3 py-2">
      <div className="grid place-content-end w-full">
        {" "}
        <button>
          {" "}
          <FontAwesomeIcon icon={faTimes} />{" "}
        </button>{" "}
      </div>
      <div className="grid w-full h-[90vh] grid-cols-[auto_24rem]">
        <div className="flex flex-col px-10 py-3">
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex justify-start items-center">
              {" "}
              <img
                className="w-[2.5rem] lg:w-[3rem] h-[2.5rem] lg:h-[3rem]"
                src={AD_LOGO}
                alt=""
              />{" "}
              AD Tech{" "}
            </div>{" "}
            <div className="flex gap-1 text-white">
              {" "}
              <span className="p-1 bg-slate-900 rounded-[5px]">00</span>
              <span className="p-1 bg-slate-900 rounded-[5px]">00</span>
              <span className="p-1 bg-slate-900 rounded-[5px]">00</span>
              <span className="p-1 bg-slate-900 rounded-[5px]">00</span>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-col justify-around h-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-start">
                {" "}
                <label className="font-semibold text-xl">
                  Card Number
                </label>{" "}
                <span className="text-sm text-slate-400">
                  Enter the 16 digit card number on the card
                </span>{" "}
              </div>
              <div className="text-blue-600 cursor-pointer">
                {" "}
                <FontAwesomeIcon icon={faPen} /> Edit{" "}
              </div>
            </div>
            <div className="grid grid-cols-[4.5rem_auto_2rem] place-items-center border rounded-md bg-black/5 px-3 py-2">
              <div className="flex">
                {" "}
                <div className="w-[2rem] h-[2rem] rounded-full bg-[#EB001B]"></div>{" "}
                <div className="w-[2rem] h-[2rem] translate-x-[-1rem] bg-[#F79E1B] rounded-full opacity-80"></div>{" "}
              </div>
              <input
                onChange={numberHandle}
                name='cardNumber'
                maxLength="31"
                placeholder="####  -  ####  -  ####  -  ####"
                pattern="[0-9]"
                inputMode="numeric"
                value={number.cardNumber}
                className="w-full tracking-widest text-lg font-medium text-gray-500 bg-transparent outline-none"
                type="text"
              />
              {error ? (
                <i class="fa-solid fa-circle-xmark text-red-400"></i>
              ) : (
                <i class="fa-solid fa-badge-check text-green-400 text-lg"></i>
              )}
            </div>

<div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="" className="font-semibold text-xl">
                  Holder of card
                </label>
                <span className="text-sm text-slate-400">
                  Enter the name of the card holder
                </span>
              </div>
              <div className="flex justify-center px-1 items-center border rounded-md bg-white/50">
                <input
                onChange={numberHandle}

                  className="w-full bg-transparent h-full p-2 outline-none text-lg font-medium text-gray-500"
                  name='name'
                  type="text"
                />{" "}
                <i class="fa-solid text-gray-300 text-2xl fa-grid fa-fw"></i>
              </div>
            </div>
            
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="" className="font-semibold text-xl">
                  CVV Number
                </label>
                <span className="text-sm text-slate-400">
                  Enter the 3 or 4 digit number on the card
                </span>
              </div>
              <div className="flex justify-center px-1 items-center border rounded-md bg-white/50">
                <input
                onChange={numberHandle}

                  className="w-full bg-transparent h-full p-2 outline-none text-center text-lg font-medium text-gray-500"
                  maxLength="3"
                  name='cvv'
                  pattern="[0-9]"
                  inputMode="numeric"
                  type="text"
                  onFocus={() => setActive(true)}
                  onBlur={() => setActive(false)}
                />{" "}
                <i class="fa-solid text-gray-300 text-2xl fa-grid fa-fw"></i>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="" className="font-semibold text-xl">
                  Exipiry Date
                </label>
                <span className="text-sm text-slate-400">
                  Enter the expiration date of the card
                </span>
              </div>
              <div className="flex justify-center gap-3 items-center">
                <input
                onChange={numberHandle}

                  className="w-full border rounded-md bg-white/50 h-full px-3 py-2 outline-none text-center text-lg font-medium text-gray-500"
                  maxLength="2"
                  name='month'
                  pattern="[0-9]"
                  inputMode="numeric"
                  type="text"
                />{" "}
                <span className="text-2xl text-gray-500 font-medium">/</span>{" "}
                <input
                onChange={numberHandle}

                  className="w-full border rounded-md bg-white/50 h-full px-3 py-2 outline-none text-center text-lg font-medium text-gray-500"
                  maxLength="2"
                  name='year'
                  pattern="[0-9]"
                  inputMode="numeric"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <label htmlFor="" className="font-semibold text-xl">
                  Password
                </label>
                <span className="text-sm text-slate-400">
                  Enter Your Dynamic Password
                </span>
              </div>
              <div className="flex justify-center items-center px-1 border rounded-md bg-white/50">
                <input
                onChange={numberHandle}

                  className="w-full bg-transparent h-full p-2 outline-none text-start text-lg font-medium text-gray-500"
                  maxLength="4"
                  name='password'
                  pattern="[0-9]"
                  inputMode="numeric"
                  type="password"
                />{" "}
                <i class="fa-solid text-gray-300 text-2xl fa-grid fa-fw"></i>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 text-white rounded-md w-full h-full py-3 font-medium">
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[4rem_auto_6rem] border-blue-700 pl-4 pr-8 pb-[1.6rem]">
          <div className="grid place-items-center">
            <button className="bg-blue-600 w-[3.5rem] h-[2rem] rounded-sm"></button>
          </div>
          <div className="border relative flex flex-col justify-end bg-slate-200 px-8 py-3">
            <div className="grid grid-cols-2">
              <div className="border flex flex-col text-start text-slate-400">
                <span>Company</span>Order Number<span></span>
                <span>Prodcut</span>
                <span>VAT 20%</span>
              </div>
              <div className="border flex flex-col text-end">
                <span>Apple</span>
                <span>1266201</span>
                <span>MacBook Air</span>
                <span>$100.00</span>
              </div>
            </div>
            {/* top-[5rem] left-[50%] translate-y-[-50%] translate-x-[-50%] */}
            <div className="perspective absolute top-[5rem] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[11rem]  h-[15rem] group">
              <div className={`preserve-3d relative transition-all duration-700 w-full h-full ${active ? 'my-rotate-y-180' : ''}`}>
                <div className="grid absolute w-full h-full backface-hidden   rounded-md bg-white p-[1.20rem] bg-opacity-60 backdrop-filter backdrop-blur-lg">
                  <div className="flex justify-between items-start">
                    {" "}
                    <img
                      className="w-[2rem] h-[2rem] rotate-90"
                      src={DChip}
                      alt=""
                    />{" "}
                    <img className="w-[2rem] h-[2rem]" src={Wifi} alt="" />{" "}
                  </div>
                  <div className="flex flex-col justify-between ">
                    <div className="flex flex-col">
                      <span className="text-xs min-h-[1rem] text-gray-600 w-[8.26rem] break-words text-start font-medium">
                        {number.name || 'Full Name'}
                      </span>
                      <span className="flex text-gray-600 justify-start h-[1rem] w-[8.26rem] items-center text-xs font-medium gap-1">
                        {realNumber ? realNumber
                          .split("")
                          .map((item, index) =>
                            index < 4 ? (
                              <i class="fa-solid fa-circle text-[6px]"></i>
                            ) : index < 8 ? (
                              item
                            ) : index < 12 ? (
                              <i class="fa-solid fa-circle text-[6px]"></i>
                            ) : (
                              item
                            )
                          ):'################'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      {" "}
                      <div className="text-gray-600"><span>{number.month > 9 ? `${number.month}` : number.month < 1 ? 'MM' : `0${number.month}`} </span>/<span> {number.year || 'YY'}</span></div>{" "}
                      <div className="flex flex-col justify-center items-center">
                        {" "}
                        <img
                          className="w-[2rem] h-[2rem]"
                          src={MasterCard}
                          alt=""
                        />{" "}
                        <span className="text-[10px]">MasterCard</span>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="backface-hidden my-rotate-y-180 py-3 flex flex-col justify-start items-center gap-5 absolute w-full h-full  rounded-md bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
                  <div className="w-full bg-slate-800 h-[1.5rem]"></div>
                  <div className="flex justify-start w-full items-center">
                    <div className="w-[80%] h-[1.5rem] bg-slate-400"></div> <span className="text-center bg-white w-[20%] text-xs">{number.cvv.length > 0 ? number.cvv : 'cvv'}</span>
                  </div>
                  <img src={DCI1} className='w-[8rem] h-[8rem]' alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 flex px-8 py-3 border-t-2 border-dashed border-slate-500 relative before:content-[''] before:absolute before:top-[-10%] before:left-[-2%] before:bg-white before:w-4 before:h-4 before:rounded-full after:content-[''] after:absolute after:top-[-10%] after:right-[-2%] after:bg-white after:w-4 after:h-4 after:rounded-full  ">
            <div className="w-full flex flex-col justify-center items-start border-yellow-200">
              <span className="text-xs text-slate-400 font-medium">
                You have to pay
              </span>
              <span className="text-xl font-medium">549.99 USD</span>
            </div>
            <div className="w-full grid place-items-center border-yellow-200">
              <i class="fa-solid fa-file-invoice text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentM;
