"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

const MASKS = {
  landline: "(99) 9999-9999",
  mobile: "(99) 99999-9999",
  get all() {
    return [this.landline, this.mobile];
  },
};

type PhoneFieldRef = HTMLInputElement;

type PropsToOmit = "inputMode";

type NativeProps = Omit<InputHTMLAttributes<PhoneFieldRef>, PropsToOmit>;

export type PhoneFieldProps = NativeProps & {
  maskType?: keyof typeof MASKS;
};

export const PhoneField = forwardRef<PhoneFieldRef, PhoneFieldProps>(
  ({ type, maskType = "all", ...props }, ref) => {
    const innerRef = useRef<PhoneFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as PhoneFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        const inputmask = new Inputmask({
          mask: MASKS[maskType],
        }).mask(innerRef.current);

        return () => {
          inputmask.remove();
        };
      }
    }, [maskType, innerRef]);

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

PhoneField.displayName = "PhoneField";
