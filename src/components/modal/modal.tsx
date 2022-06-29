import React, { FC, useRef, useEffect } from "react";
import Portal from "@reach/portal";
import { motion } from "framer-motion";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import { useUI } from "../../context/uiContext";
import useOnClickOutside from "../../customHock/use-click-outside";
import { useStyles } from "./style";
import { Box, Button } from "@mui/material";
import theme from "../../theme/theme";

type ModalProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
	rootClassName?: string;
	useBlurBackdrop?: boolean;
	containerClassName?: string;
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;





const Modal: FC<ModalProps> = ({
	children,
	open,
	onClose,
	rootClassName,
	useBlurBackdrop,
	containerClassName,
}) => {
	const { closeModal } = useUI();
	const modalRootRef = useRef() as DivElementRef;
	const modalInnerRef = useRef() as DivElementRef;
	useOnClickOutside(modalInnerRef, () => closeModal());
	useEffect(() => {
		if (modalInnerRef.current) {
			if (open) {
				disableBodyScroll(modalInnerRef.current);
			} else {
				enableBodyScroll(modalInnerRef.current);
			}
		}
		return () => {
			clearAllBodyScrollLocks();
		};
	}, [open]);


	const dropIn = {
		hidden: {
		  y: "-100vh",
		  opacity: 0,
		},
		visible: {
		  y: "0",
		  opacity: 1,
		  transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		  },
		},
		exit: {
		  y: "100vh",
		  opacity: 0,
		},
	};

	function fadeInOut (duration:number = 0.2) {
		return {
		  from: { 
			opacity: 0,
			transition: {
			  type: 'easeInOut',
					  duration: duration,
			} 
		  },
		  to: { 
			opacity: 1,
			transition: {
			  type: 'easeInOut',
					  duration: duration,
			} 
		  },
		}
	  }

	const classes = useStyles()

	return (
		<Portal>
				{open && (
					<motion.div
						ref={modalRootRef}
						key="modal"
						initial="from"
						animate="to"
						exit="from"
						variants={fadeInOut(.35)}
						
						className={cn(
							classes.modalContainer,
							useBlurBackdrop && classes.modalBackDrop,
							rootClassName
						)}
					>
						<Button
							onClick={onClose}
							aria-label="Close panel"
							variant="icon"
							className={cn(
								classes.modalBtn,
							)}
							>
							<IoClose size={25} />
						</Button>
						<motion.div
							initial="hidden"
							animate="visible"
							exit="exit"
	
							variants={dropIn}
							
							className={classes.modalContent}
						>
							<div
								className={cn(
									classes.modalDialog,
									containerClassName
								)}
							>
								<Box
									ref={modalInnerRef}
									sx={{
										overflowY:'auto', 
										height:"100%",
										borderRadius:"20px",
										bgcolor:"#fff",
										[theme.breakpoints.down("md")]:{
											width: "320px"
										},
										width:"550px",
									}}
									style={{ maxHeight: "calc(100vh - 140px)" }}
								>
									<Box
										sx={{
											width:"100%",
											[theme.breakpoints.down("md")]:{
												width:"96%",
												px:2
											},
											px:4,
											mx:"auto"
										}}
									>
										{children}
									</Box>
								</Box>
							</div>
						</motion.div>
					</motion.div>
				)}
		</Portal>
	);
};

export default Modal;
