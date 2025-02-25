import { default as React } from 'react';
type Props = {
    label: string | React.JSX.Element;
    children: React.JSX.Element | React.JSX.Element[];
    defaultValue: string;
    onChange: (v: string) => void;
};
export default function RadioGroupInput({ label, children, defaultValue, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioGroupInput.d.ts.map