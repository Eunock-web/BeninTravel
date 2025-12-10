
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonInterface = PropsWithChildren & {
    className?: string;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

function Button({ className, children, onClick, type }: ButtonInterface) {
    return (
        <>
            <div>
                <button className={ " btn " + (className ?? "") } onClick={onClick} type={type}>
                    {children}
                </button>
            </div>
        </>
    )
}

export default Button