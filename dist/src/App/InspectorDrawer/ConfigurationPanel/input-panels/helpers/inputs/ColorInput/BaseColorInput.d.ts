type Props = {
    nullable: true;
    label: string;
    onChange: (value: string | null) => void;
    defaultValue: string | null;
} | {
    nullable: false;
    label: string;
    onChange: (value: string) => void;
    defaultValue: string;
};
export default function ColorInput({ label, defaultValue, onChange, nullable }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BaseColorInput.d.ts.map