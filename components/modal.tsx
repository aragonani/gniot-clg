import React from "react";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Readonly<Props>) => {
	if (!isOpen) return null;
	return (
		<div
			className="fixed px-2 inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
			onClick={onClose}
		>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>
	);
};

export default Modal;
