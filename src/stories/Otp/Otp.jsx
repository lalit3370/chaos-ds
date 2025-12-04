import { React, useState, useRef, useEffect } from "react";
import './otp.css';

export const Otp = (props) => {
  const { otpLength = 4 } = props;
  const [otpValue, setOtpValue] = useState(new Array(otpLength).fill(""));
  const inputRefs = useRef([]);

  function handleKeyDown(e, index) {
    const { key } = e;
    console.log(key, index);
    const isLastIndex = index === otpLength - 1;
    const isFirstIndex = index === 0;

    if (e.key === "Backspace") {
      const newOtpValue = [...otpValue];
      newOtpValue[index] = "";
      setOtpValue(newOtpValue);
      !isFirstIndex && inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowLeft") {
      !isFirstIndex && inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowRight") {
      !isLastIndex && inputRefs.current[index + 1].focus();
    }
    if (!isNaN(key)) {
      const newOtpValue = [...otpValue];
      newOtpValue[index] = e.key;
      console.log(newOtpValue)
      setOtpValue(newOtpValue);
      !isLastIndex && inputRefs.current[index + 1].focus();
    }
  }
  useEffect(() => {
    console.log(inputRefs.current);
    inputRefs.current[0].focus();
  }, []);

  return (
    <div>
      {otpValue.map((value, index) => {
        return (
          <input
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(node) => {
              inputRefs.current[index] = node;
            }}
            key={index}
            onChange={()=>{}}
            aria-label={`Otp character ${index+1}`}
            className={'otpinput'}
          />
        );
      })}
    </div>
  );
};
