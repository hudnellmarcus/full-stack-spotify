import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debouncedValue;
};

export default useDebounce;


// This will make sure that the search makes API calls only after 500 ms so that many API calls aren't executed in a short amount of time. 