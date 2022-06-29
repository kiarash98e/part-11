import React, { useRef, useEffect } from "react";
import cn from "classnames";
import { useUI } from "../../context/uiContext";
import SearchBox from "./search-box";
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Box } from "@mui/material";
import { useStyles } from "./style";
import { useTodo } from "../../context/todos/todoContext";

export default function Search() {
	const { displaySearch, closeSearch } = useUI();
	const [searchText, setSearchText] = React.useState("")
	const { filterTask } = useTodo()

	function handleSearch(e: React.SyntheticEvent) {
		e.preventDefault()
		closeSearch()
		filterTask(searchText)
		setSearchText("")
	}

	

	function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
		setSearchText(e.currentTarget.value)
		
	}
	function clear() {
		setSearchText("")
		
	}

	const classes = useStyles()
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			if (displaySearch) {
				disableBodyScroll(ref.current);
			} else {
				enableBodyScroll(ref.current);

			}
		}
		return () => {
			clearAllBodyScrollLocks();
		};
	}, [displaySearch]);
	
	return (
		<Box ref={ref}>
			<div
				className={cn(classes.overlay, 
					`${displaySearch ? classes.open : ""}`
				)}
				role="button"
				onClick={() => closeSearch(!displaySearch)}
				
								
			/>
			<div
				className={cn(
					classes.drawerSearch,
					`${displaySearch ? classes.open1 :""}`
				)}
			>
				<div style={{
					width:"100%",
					display: 'flex',
					flexDirection:"column",
					justifyContent:"center"
				}}>
					<div style={{
						display: 'flex',
						flexShrink:0,
						marginTop:"14px",
						width:"100%",
					}}>
						<div
							style={{
								display: 'flex',
								flexDirection:"column",
								marginRight:"auto",
								marginLeft:"auto",
								marginBottom:"15px",
								width:"100%",
								backgroundColor:"#fff",
							}}>
							<SearchBox
								onSubmit={handleSearch}
								onChange={handleAutoSearch}
								name="search"
								value={searchText}
								onClear={clear}
								onClick={() => closeSearch(!displaySearch)}
								ref={(input) => input && input.focus()}
							/>
						</div>
						
					</div>
				</div>
			</div>
		</Box>
	);
}
