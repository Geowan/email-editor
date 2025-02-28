import { default as React } from 'react';
type SliderInputProps = {
    iconLabel: React.JSX.Element;
    step?: number;
    marks?: boolean;
    units: string;
    min?: number;
    max?: number;
    value: number;
    setValue: (v: number) => void;
};
export default function RawSliderInput({ iconLabel, value, setValue, units, ...props }: SliderInputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RawSliderInput.d.ts.map