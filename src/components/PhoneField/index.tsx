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

type AttributesToOmit = "inputMode" | "type";

type NativeAttributes = Omit<
  InputHTMLAttributes<PhoneFieldRef>,
  AttributesToOmit
>;

export type PhoneFieldProps = NativeAttributes & {
  maskType?: keyof typeof MASKS;
};

export const PhoneField = forwardRef<PhoneFieldRef, PhoneFieldProps>(
  ({ maskType = "all", ...props }, ref) => {
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

    return <input type="text" inputMode="decimal" {...props} ref={innerRef} />;
  }
);

PhoneField.displayName = "PhoneField";
