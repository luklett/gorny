/// <reference types="react" />
interface WhenProps {
    children: React.ReactNode;
    condition: boolean;
}
export declare const When: ({ children }: WhenProps) => import("react").ReactNode;
export {};
