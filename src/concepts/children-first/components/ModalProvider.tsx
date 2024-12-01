import { createContext, PropsWithChildren, useContext, useState } from "react";

type ModalContext = {
    showModal: boolean;
    toggleModal: () => void;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export default function ModalProvider({ children }: PropsWithChildren) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <ModalContext.Provider value={{ showModal, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within ModalProvider');
    }
    return context;
}