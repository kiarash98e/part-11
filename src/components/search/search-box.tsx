import React from "react";
import { IoCloseOutline,IoSearchOutline } from "react-icons/io5";
import { useStyles } from "./style";

type SearchProps = {
	className?: string;
	onSubmit: (e: React.SyntheticEvent) => void;
	onClear: (e: React.SyntheticEvent) => void;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	name: string;
	value: string;
	onClick: () => void
};

const SearchBox = React.forwardRef<HTMLInputElement, SearchProps>(
	({ className, onSubmit, onClear, onClick, ...rest }, ref) => {
		
        function closeAndClear (e:React.SyntheticEvent) {
			onClear(e)
			onClick()
		}

		const classes = useStyles()

		return (
			<form
				className={classes.form}
				noValidate
				role="search"
				onSubmit={onSubmit}
			>
				<label htmlFor="search" className={classes.label}>
					<span className={classes.searchLogo}>
						<IoSearchOutline size={25} style={{
							color:"#212121"
						}} />
					</span>
					<input
						id="search"
						className={classes.searchInput}
						placeholder={"search todo"}
						aria-label="Search"
						autoComplete="off"
						ref={ref}
						{...rest}
					/>
				</label>
				<button
					type="button"
					className={classes.searchClose}
					onClick={closeAndClear}
				>
					<IoCloseOutline size={25} style={{
							width:"26px",
							height:"26px",
							color:"#212121"
					}} />
				</button>
			</form>
		);
	}
);

export default SearchBox;
