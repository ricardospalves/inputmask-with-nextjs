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

type AttributesToOmit = "inputMode" | "type";

type NativeAttributes = Omit<
  InputHTMLAttributes<CNPJFieldRef>,
  AttributesToOmit
>;

export type CNPJFieldProps = NativeAttributes;

export const CNPJField = forwardRef<CNPJFieldRef, CNPJFieldProps>(
  ({ ...props }, ref) => {
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

    return <input type="text" inputMode="decimal" {...props} ref={innerRef} />;
  }
);

CNPJField.displayName = "CNPJField";
