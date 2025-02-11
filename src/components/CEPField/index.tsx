"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type CEPFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<CEPFieldRef>, PropsToOmit>;

export type CEPFieldProps = NativeProps;

export const CEPField = forwardRef<CEPFieldRef, CEPFieldProps>(
  ({ type, ...props }, ref) => {
    const innerRef = useRef<CEPFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as CEPFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        const inputmask = new Inputmask({
          mask: "99999-999",
        }).mask(innerRef.current);

        return () => {
          inputmask.remove();
        };
      }
    }, [innerRef]);

    return (
      <input
        type={type || "text"}
        inputMode="decimal"
        {...props}
        ref={innerRef}
      />
    );
  }
);

CEPField.displayName = "CEPField";
