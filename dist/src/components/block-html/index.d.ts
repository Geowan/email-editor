import { z } from 'zod';
export declare const HtmlPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "right", "center"]>>>;
        padding: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            right: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        color?: string | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        color?: string | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        contents: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        contents?: string | null | undefined;
    }, {
        contents?: string | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        color?: string | null | undefined;
    } | null | undefined;
    props?: {
        contents?: string | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        color?: string | null | undefined;
    } | null | undefined;
    props?: {
        contents?: string | null | undefined;
    } | null | undefined;
}>;
export type HtmlProps = z.infer<typeof HtmlPropsSchema>;
export declare function Html({ style, props }: HtmlProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map