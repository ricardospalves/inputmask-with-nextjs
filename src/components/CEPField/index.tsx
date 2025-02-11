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

type AttributesToOmit = "inputMode" | "type";

type NativeAttributes = Omit<
  InputHTMLAttributes<CEPFieldRef>,
  AttributesToOmit
>;

export type CEPFieldProps = NativeAttributes;

export const CEPField = forwardRef<CEPFieldRef, CEPFieldProps>(
  ({ ...props }, ref) => {
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

    return <input type="text" inputMode="decimal" {...props} ref={innerRef} />;
  }
);

CEPField.displayName = "CEPField";
