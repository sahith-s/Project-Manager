import { createPortal} from "react-dom";
import { forwardRef } from "react";

export default forwardRef(function Modal(props, ref) {
    return createPortal(
        <dialog
            ref={ref}
            className="bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg p-6 w-1/4 relative
             backdrop:bg-black backdrop:bg-opacity-60 backdrop:backdrop-blur-sm"
        >
            <h1 className="text-lg font-bold mb-4">Oops..!</h1>
            <p className="mb-4 pb-4">Please fill out all the details</p>
            <button
                className="mt-4 mx-auto block border border-red-400 text-red-500 hover:text-red-700 hover:border-red-700 font-bold py-2 px-4 rounded"
                onClick={() => ref.current.close()}
            >
                Okay
            </button>
        </dialog>,
        document.getElementById("modal-root")
    );
});