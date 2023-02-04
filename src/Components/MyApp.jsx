import React, { useEffect, useState } from "react";
import PaymentUI from "./PaymenUI";

const MyApp = () => {
  return (
    <div className="bg-blue-600 p-2 grid place-items-center min-h-screen">
      <PaymentUI />
    </div>
  );
};

export default MyApp;
