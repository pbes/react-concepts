import { PropsWithChildren } from "react";
import { useModalContext } from "./ModalProvider";
import React from "react";

export default function ModalTarget({ children }: PropsWithChildren) {
    const { toggleModal } = useModalContext();
    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        ...(child.props && { onClick: () => toggleModal() }),
                    });
                }
                return child;
            })}
        </>
    )
}