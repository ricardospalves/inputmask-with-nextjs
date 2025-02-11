"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type CNPJFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<CNPJFieldRef>, PropsToOmit>;

export type CNPJFieldProps = NativeProps;

export const CNPJField = forwardRef<CNPJFieldRef, CNPJFieldProps>(
  ({ type, ...props }, ref) => {
    const innerRef = useRef<CNPJFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as CNPJFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        const inputmask = new Inputmask({
          mask: "99.999.999/9999-99",
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

CNPJField.displayName = "CNPJField";
