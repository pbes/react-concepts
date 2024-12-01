import ModalProvider from "./components/ModalProvider";
import ModalTarget from "./components/ModalTarget";
import ModalTrigger from "./components/ModalTrigger";

export default function ChildrenFirstApproach() {
    return (
        <ModalProvider>
            <ModalTrigger>
                <button>Open Modal</button>
            </ModalTrigger>
            <ModalTarget>
                <div>
                    <h1>Modal</h1>
                    <p>Modal content</p>
                </div>
            </ModalTarget>
        </ModalProvider>
    )
}