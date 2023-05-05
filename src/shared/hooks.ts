import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMenuContext } from "./menu";

export const useForceUpdate = (): [number, () => void] => {
	const [time, setTime] = useState(0);
	return [time, useCallback(() => setTime(Date.now()), [])];
};

export const useCompare = (value: any) => {
	const prevValue = usePrevious(value);
	//On mount the value will be undefined, so we don't want to return true
	if (prevValue === undefined) return false;
	return prevValue !== value;
};

const usePrevious = (value: any) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export const useDidMountEffect = (func: (...rest: any) => any, deps: any[]) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export const useFocusMenuTextArea = (
	isMenuVisible: boolean,
	onChange: (value: string) => void
) => useFocusMenuContent<HTMLTextAreaElement>(isMenuVisible, onChange);

export const useFocusMenuInput = (
	isMenuVisible: boolean,
	onChange: (value: string) => void
) => useFocusMenuContent<HTMLInputElement>(isMenuVisible, onChange);

const useFocusMenuContent = <T>(
	isMenuVisible: boolean,
	onChange: (value: string) => void
) => {
	const { menuKey } = useMenuContext();
	const inputRef = useRef<T | null>(null);

	//The menu will render 2 times, once for the initial position and then again to shift the menu into view.
	//We only want to focus the input on the second render.
	useEffect(() => {
		if (isMenuVisible) focusInput();
	}, [isMenuVisible]);

	function focusInput() {
		if (inputRef.current) {
			if (inputRef.current instanceof HTMLElement) {
				inputRef.current.focus();
				if (menuKey !== null)
					onChange(inputRef.current.getText() + menuKey);
			}
		}
	}

	return inputRef;
};

export const useId = (): string => {
	const [id] = useState(uuidv4());
	return id;
};
