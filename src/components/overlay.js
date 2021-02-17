import React from "react";
import { useState, useEffect, useRef } from "react";
import Overlay from "react-overlay-component";
import useWindowSize from "../hooks/use-windowsize";

const OverlayWindow = () => {
	const checkWindow = useWindowSize();

	const [isOpen, setOverlay] = useState(false);

	console.log(checkWindow.width, checkWindow.height);
	useInterval(() => {
		if (checkWindow.width < checkWindow.height) {
			setOverlay(true);
		} else {
			setOverlay(false);
		}
	}, 100);


    const configs = {
        animate: true,
        clickDismiss: false,
        escapeDismiss: false,
        focusOutline: true,
        contentClass: "container overlay-content",
    };

	return (
		<Overlay configs={configs} isOpen={isOpen}>
			<p>Пожалуйста переверните устройство</p>
		</Overlay>
	);

	function useInterval(callback, delay) {
		const savedCallback = useRef();

		useEffect(() => {
			savedCallback.current = callback;
		});

		useEffect(() => {
			function tick() {
				savedCallback.current();
			}

			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}, [delay]);
	}
};
export default OverlayWindow;
