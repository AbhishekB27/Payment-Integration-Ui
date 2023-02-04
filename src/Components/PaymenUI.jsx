import React, { useState } from "react";
import { useFormik } from "formik";
import AD_LOGO from "./images/AD_LOGO.png";
import DChip from "./images/CardChip.png";
import Wifi from "./images/Wifi.png";
import MasterCard from "./images/MasterCard.png";
import DCI1 from "./images/DCI1.png";
import PaymentSchema from "./paymentSchema";
import { useRef } from "react";

const PaymentUI = () => {
  const initialValues = {
    cardNumber: "",
    fullName: "",
    cvv: "",
    month: "",
    year: "",
    password: "",
  };
  const cRef = useRef(null);
  const handlePayment = (data) => {
    data.cardNumber = realNumber;
    console.log(data);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: PaymentSchema,
    onSubmit: handlePayment,
  });
  const [realNumber, setRealNumber] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  const handleChange = (event, setFieldValue) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "cardNumber") {
      let cardValue = value.split("  -  ").join("").trim() || " ";
      if (!isNaN(cardValue)) {
        let finalValue = cardValue.match(/.{1,4}/g).join("  -  ");
        setFieldValue([name], finalValue.trim());
        setRealNumber(finalValue.split("  -  ").join("").trim());
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setFieldValue([name], value);
      console.log("value");
    }
  };
  return (
    <div className="space-y-5">
      {/* <div className="text-lg md:text-xl lg:text-2xl bg-blue-600/70 dark:bg-gray-700 dark:text-gray-300 text-white py-2 font-sans font-medium">
        Payment Integration UI
      </div> */}
      <div className="text-white text-lg md:text-xl lg:text-2xl">
        <span>Payment Integration UI</span>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-lg dark:bg-gray-700 w-full"
      >
        <div className="grid w-full min-h-[35rem] lg:grid-cols-[auto_24rem]">
          <div className="flex flex-col space-y-[0.80rem] gap-2 lg:gap-0 py-1 px-1 lg:px-5 lg:py-1">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2 font-sans font-medium"> <img src={AD_LOGO} className='w-[2.5rem] md:w-[3.5rem] h-[2.5rem] md:h-[3.5rem]' alt="" /> <span className="pt-3">AD Tech</span> </div>
              <div className="flex gap-1 text-white">
                {" "}
                <span className="p-1 bg-gray-100 text-gray-800 dark:text-white dark:bg-slate-900 rounded-[5px]">
                  00
                </span>
                <span className="p-1 bg-gray-100 text-gray-800 dark:text-white dark:bg-slate-900 rounded-[5px]">
                  00
                </span>
                <span className="p-1 bg-gray-100 text-gray-800 dark:text-white dark:bg-slate-900 rounded-[5px]">
                  05
                </span>
                <span className="p-1 bg-gray-100 text-gray-800 dark:text-white dark:bg-slate-900 rounded-[5px]">
                  00
                </span>{" "}
              </div>{" "}
            </div>
            <div className="flex flex-col dark:bg-gray-800 px-5 py-2 justify-around lg:gap-0 gap-5 h-full">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-start">
                  {" "}
                  <label className="lg:font-semibold font-medium text-base lg:text-xl">
                    Card Number
                  </label>{" "}
                  <span className="text-sm text-slate-400">
                    Enter the 16 digit card number on the card
                  </span>{" "}
                </div>
                <div
                  onClick={() => {
                    cRef.current.focus();
                  }}
                  className="cursor-pointer"
                >
                  {" "}
                  <i class="fa-solid fa-pen"></i> Edit{" "}
                </div>
              </div>
              <div>
                <div
                  className={`grid ${
                    error
                      ? "shake border-2 ring-4 dark:ring-red-500 ring-red-200 border-red-400"
                      : ""
                  } grid-cols-[4.5rem_auto_2rem] place-items-center border border-gray-300/30 rounded-md bg-white/50 dark:bg-gray-700/30 lg:px-3 px-2 lg:py-2 py-1`}
                >
                  <div className="flex">
                    {" "}
                    <div className="lg:w-[2rem] w-[1rem] h-[1rem] lg:h-[2rem] rounded-full bg-[#EB001B]"></div>{" "}
                    <div className="lg:w-[2rem] w-[1rem] h-[1rem] lg:h-[2rem] translate-x-[-8px] bg-[#F79E1B] rounded-full opacity-80"></div>{" "}
                  </div>
                  <input
                    ref={cRef}
                    onChange={(event) => {
                      handleChange(event, formik.setFieldValue);
                    }}
                    name="cardNumber"
                    maxLength="31"
                    // pattern="[0-9]*"
                    placeholder="####  -  ####  -  ####  -  ####"
                    inputMode="numeric"
                    value={formik.values.cardNumber}
                    className="w-full lg:tracking-widest tracking-wide lg:text-lg text-base lg:font-medium font-normal dark:text-gray-100 text-gray-500 bg-transparent outline-none"
                    type="text"
                  />
                  {error ? (
                    <i class="fa-solid fa-circle-xmark text-red-400"></i>
                  ) : (
                    <i class="fa-solid fa-badge-check text-green-400 text-lg"></i>
                  )}
                </div>
                <div className="h-[1.4rem]">
                  {" "}
                  {(formik.errors.cardNumber && formik.touched.cardNumber) ||
                  error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.cardNumber ?? "Should be a number"}
                    </div>
                  ) : null}{" "}
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                  <label
                    htmlFor=""
                    className="lg:font-semibold font-medium text-base lg:text-xl"
                  >
                    Holder of card
                  </label>
                  <span className="lg:text-sm text-xs text-slate-400">
                    Enter the name of the card holder
                  </span>
                </div>
                <div className="flex justify-center px-1 items-center border dark:border-gray-300/30 rounded-md bg-white/50 dark:bg-gray-700/30">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    className="w-full bg-transparent h-full p-1 lg:p-2 outline-none text-base lg:text-lg font-normal lg:font-medium dark:text-gray-100 text-gray-500"
                    name="fullName"
                    type="text"
                  />{" "}
                  <i class="fa-solid text-gray-300 text-xl lg:text-2xl fa-grid fa-fw"></i>
                </div>
                <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.fullName && formik.touched.fullName) ||
                  error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.fullName}
                    </div>
                  ) : null}{" "}
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                  <label
                    htmlFor=""
                    className="lg:font-semibold font-medium text-base lg:text-xl"
                  >
                    CVV Number
                  </label>
                  <span className="text-xs lg:text-sm text-slate-400">
                    Enter the 3 or 4 digit number on the card
                  </span>
                </div>
                <div className="flex justify-center px-1 items-center border dark:border-gray-300/30 rounded-md bg-white/50 dark:bg-gray-700/30">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.cvv}
                    className="w-full bg-transparent h-full p-1 outline-none text-center text-base lg:text-lg font-normal lg:font-medium dark:text-gray-100 text-gray-500"
                    maxLength="3"
                    name="cvv"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                  />{" "}
                  <i class="fa-solid text-gray-300 text-xl lg:text-2xl fa-grid fa-fw"></i>
                </div>
                <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.cvv && formik.touched.cvv) || error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.cvv}
                    </div>
                  ) : null}{" "}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                  <label
                    htmlFor=""
                    className="lg:font-semibold font-medium text-base lg:text-xl"
                  >
                    Exipiry Date
                  </label>
                  <span className="text-xs lg:text-sm text-slate-400">
                    Enter the expiration date of the card
                  </span>
                </div>
                <div className="flex justify-center gap-2 lg:gap-3 items-center">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.month}
                    className="w-full border rounded-md bg-white/50 dark:bg-gray-700/30 dark:border-gray-300/30 dark:text-gray-100 h-full px-2 lg:px-3 py-1 lg:py-2 outline-none text-center text-base lg:text-lg font-normal lg:font-medium text-gray-500"
                    maxLength="2"
                    name="month"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                  />{" "}
                  <span className="lg:text-2xl text-xl text-gray-500 font-medium">
                    /
                  </span>{" "}
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.year}
                    className="w-full border rounded-md bg-white/50 dark:bg-gray-700/30 dark:border-gray-300/30 dark:text-gray-100 h-full px-3 py-2 outline-none text-center text-lg font-medium text-gray-500"
                    maxLength="2"
                    name="year"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="text"
                  />
                </div>
                <div className="h-[1.4rem] w-full grid grid-cols-2 gap-10 col-end-3">
                  {" "}
                  {(formik.errors.month && formik.touched.month) || error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.month}
                    </div>
                  ) : null}{" "}
                  {(formik.errors.year && formik.touched.year) || error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.year}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                  <label
                    htmlFor=""
                    className="lg:font-semibold font-medium text-base lg:text-xl"
                  >
                    Password
                  </label>
                  <span className="text-xs lg:text-sm text-slate-400">
                    Enter Your Dynamic Password
                  </span>
                </div>
                <div className="flex justify-center items-center px-1 border border-gray-300/30 rounded-md bg-white/50 dark:bg-gray-700/30">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full bg-transparent h-full p-1 lg:p-2 outline-none text-start text-base lg:text-lg font-medium dark:text-gray-100 text-gray-500"
                    maxLength="4"
                    name="password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    type="password"
                  />{" "}
                  <i class="fa-solid text-gray-300 text-xl lg:text-2xl fa-grid fa-fw"></i>
                </div>
                <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.password && formik.touched.password) ||
                  error ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.password}
                    </div>
                  ) : null}{" "}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 dark:bg-gray-300 dark:text-gray-800 font-sans outline-none active:scale-90 transition-all text-white rounded-md w-full h-full py-2 lg:py-3 font-normal lg:font-medium"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[4rem_auto_6rem] text-gray-600 dark:text-gray-100 border-blue-700 pl-4 pr-8 pb-[1.6rem]">
            <div className="grid place-items-center">
              <button className="bg-blue-600 dark:bg-gray-300 hidden lg:block w-[3.5rem] h-[2rem] rounded-sm"></button>
            </div>
            <div className="relative flex flex-col justify-end bg-slate-200 dark:bg-gray-800 px-8 py-3">
              <div className="grid grid-cols-2">
                <div className="flex flex-col text-start text-slate-400">
                  <span>Company</span>Order Number<span></span>
                  <span>Prodcut</span>
                  <span>VAT 5%</span>
                </div>
                <div className="flex flex-col text-end">
                  <span>Apple</span>
                  <span>1266201</span>
                  <span>MacBook Air</span>
                  <span> <i class="fa-regular fa-indian-rupee-sign"></i> {110000 * 5/100}</span>
                </div>
              </div>
              {/* top-[5rem] left-[50%] translate-y-[-50%] translate-x-[-50%] */}
              <div className="perspective  absolute hidden lg:block top-[5rem] cursor-pointer left-[50%] translate-y-[-50%] translate-x-[-50%] w-[11rem]  h-[15rem] group">
                <div
                  className={`preserve-3d relative transition-all hover:my-rotate-y-180 duration-700 w-full h-full ${
                    active ? "my-rotate-y-180" : ""
                  }`}
                >
                  <div className="grid absolute w-full h-full backface-hidden  rounded-md bg-white/30 dark:bg-gray-700/30 p-[1.20rem] bg-opacity-60 backdrop-filter backdrop-blur-lg">
                    <div className="flex justify-between items-start">
                      {" "}
                      <img
                        className="w-[2rem] h-[2rem] rotate-90"
                        src={DChip}
                        alt=""
                      />{" "}
                      <i class="fa-solid fa-wifi text-lg"></i>{" "}
                    </div>
                    <div className="flex flex-col justify-between ">
                      <div className="flex flex-col">
                        <span className="text-xs min-h-[1rem] w-[8.26rem] break-words text-start font-medium">
                          {formik.values.fullName || "Full Name"}
                        </span>
                        <span className="flex justify-start h-[1rem] w-[8.26rem] items-center text-sm font-medium gap-[1.9px]">
                          {realNumber
                            ? realNumber
                                .split("")
                                .map((item, index) =>
                                  index < 4 ? (
                                    <i class="fa-solid fa-star-of-life text-[8px]"></i>
                                  ) : index < 8 ? (
                                    item
                                  ) : index < 12 ? (
                                    <i class="fa-solid fa-star-of-life text-[8px]"></i>
                                  ) : (
                                    item
                                  )
                                )
                            : Array(16)
                                .fill(0)
                                .map((item) => (
                                  <i class="fa-solid fa-star-of-life text-[7.5px]"></i>
                                ))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        {" "}
                        <div className="">
                          <span>
                            {formik.values.month > 9
                              ? `${formik.values.month}`
                              : formik.values.month < 1
                              ? "MM"
                              : `0${formik.values.month}`}{" "}
                          </span>
                          /
                          <span>
                            {" "}
                            {formik.values.year > 9
                              ? `${formik.values.year}`
                              : formik.values.year < 1
                              ? "YY"
                              : `0${formik.values.year}`}
                          </span>
                        </div>{" "}
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
                  <div className="backface-hidden my-rotate-y-180 py-3 flex flex-col justify-start items-center gap-5 absolute w-full h-full  rounded-md bg-white/30  dark:bg-gray-700/30 bg-opacity-60 backdrop-filter backdrop-blur-lg">
                    <div className="w-full bg-slate-800 h-[1.5rem]"></div>
                    <div className="flex justify-start w-full items-center">
                      <div className="w-[80%] h-[1.5rem] bg-slate-400"></div>{" "}
                      <span className="text-center bg-white dark:text-gray-800 font-sans font-medium w-[20%] text-xs">
                        {formik.values.cvv.length > 0
                          ? formik.values.cvv
                          : "cvv"}
                      </span>
                    </div>
                    <img src={DCI1} className="w-[8rem] h-[8rem]" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 dark:bg-gray-800 flex px-8 py-3 border-t-2 border-dashed dark:border-gray-300 border-slate-500 relative before:content-[''] before:absolute before:top-[-10%] before:left-[-2%] before:bg-white dark:before:bg-gray-300 before:w-4 before:h-4 before:rounded-full after:content-[''] after:absolute after:top-[-10%] after:right-[-2%] after:bg-white dark:after:bg-gray-300 after:w-4 after:h-4 after:rounded-full  ">
              <div className="w-full flex flex-col justify-center items-start border-yellow-200">
                <span className="text-xs text-slate-400 font-medium">
                  You have to pay
                </span>
                <span className="text-xl font-medium">
                  <i class="fa-regular fa-indian-rupee-sign"></i> {110000 + 110000 * 5/100}
                  .00
                </span>
              </div>
              <div className="w-full grid place-items-center border-yellow-200">
                <i class="fa-solid fa-file-invoice text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentUI;
