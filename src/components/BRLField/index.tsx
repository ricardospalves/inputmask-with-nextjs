"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Inputmask from "inputmask";

type BRLFieldRef = HTMLInputElement;

type AttributesToOmit = "inputMode" | "type";

type NativeAttributes = Omit<
  InputHTMLAttributes<BRLFieldRef>,
  AttributesToOmit
>;

export type BRLFieldProps = NativeAttributes & {
  maskPrefix?: boolean;
};

export const BRLField = forwardRef<BRLFieldRef, BRLFieldProps>(
  ({ maskPrefix, ...props }, ref) => {
    const innerRef = useRef<BRLFieldRef>(null);

    useImperativeHandle(ref, () => innerRef.current as BRLFieldRef);

    useEffect(() => {
      if (innerRef?.current) {
        const inputmask = new Inputmask({
          alias: "numeric",
          prefix: maskPrefix ? "R$ " : undefined,
          radixPoint: ",",
          groupSeparator: ".",
          digits: 2,
          numericInput: true,
        }).mask(innerRef.current);

        return () => {
          inputmask.remove();
        };
      }
    }, [maskPrefix, innerRef]);

    return <input type="text" inputMode="decimal" {...props} ref={innerRef} />;
  }
);

BRLField.displayName = "BRLField";
