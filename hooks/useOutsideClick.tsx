import React, {RefObject, useEffect} from "react";

export const useOutsideClick = (ref: RefObject<any>, action: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current?.contains(event.target)) {
                action()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
