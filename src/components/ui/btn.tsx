
import React, { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "solid" | "rounded" | "circle" | "modal";
	active?: boolean;
	type?: "submit" | "reset" | "button";
	loading?: boolean;
	disabled?: boolean;
	value?:string;
    onClick?:(e: any) => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		className,
		variant = "solid",
		children,
		active,
		loading = false,
		disabled = false,
		value,
        onClick,
		...rest
	} = props;

	
	return (
		<button
        
			aria-pressed={active}
			data-variant={variant}
			ref={ref}
			className={className}
			disabled={disabled}
            onClick={onClick}
			value={value}
			{...rest}
		>
			{children}
			{loading && (
				<svg
					className="animate-spin -me-1 ms-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			)}
		</button>
	);
});

export default Button;
