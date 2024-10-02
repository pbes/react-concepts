import { PropsWithChildren } from "react";
import { useModalContext } from "./ModalProvider";

export default function ModalTarget({ children }: PropsWithChildren) {
    const { showModal } = useModalContext();

    return (
        <>
            {showModal && children}
        </>
    )
}