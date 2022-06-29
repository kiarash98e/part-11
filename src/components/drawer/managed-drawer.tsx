import React from 'react'
import { useUI } from "../../context/uiContext";
import { Drawer } from "./drawer";
import { useTheme } from '../../context/theme/themeContext'
import theme from '../../theme/theme';
import { IoCloseOutline } from 'react-icons/io5';
import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Select from '../ui/select';
import { useTodo } from '../../context/todos/todoContext';


const status = [
    {name:'status',label:"status"},
    {name:'todo',label:"todo"},
    {name:'done',label:"done"},
    {name:'doing',label:"doing"},
]



const priority = [
    {name:"priority",label:"priority"},
    {name:"low",label:"low"},
    {name:"high",label:"high"},
    {name:"medium",label:"medium"},
] 



const ManagedDrawer: React.FC<any> = () => {
	const { displaySideBar, closeSidebar } = useUI();
	const { filterTaskBySelect } = useTodo();
	const { toggle }: any | boolean = useTheme()

    const [filters, setFilters] = React.useState<any>({})

	const handleSub = () => {
		filterTaskBySelect(filters)
		setFilters({})
		closeSidebar()
	}

	const styles = {
		right: 0,
		zIndex: "1000",
		background: !toggle || toggle === undefined ? `${theme!.colors!.white}` : `${theme!.colors!.heading}`,
		color: !toggle || toggle === undefined ? `${theme!.colors!.heading}` : `${theme!.colors!.white}`,
	}

	return (
		<Drawer
			open={displaySideBar}
			placement={"right"}
			onClose={closeSidebar}
			handler={false}
			showMask={true}
			level={null}
			width={340}

			duration="0.5s"
			contentWrapperStyle={styles}

		>
			<Box sx={{ px: 2, width: "100%", height: "100%", display: "flex" }}>
				<Box sx={{
					px: 2, py: 4, bgcolor: "white", display: "flex", width: "100%", height: "100%", flexDirection: 'column',
				}}>
					<Box sx={{
						width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between',
					}}>
						<Typography variant='h4' sx={{ fontSize: "17px", color: "#212121" }}>Filters</Typography>
						<Button
							sx={{
								outline: "none",
								fontSize: "20px",
								width: "45px",
								height: "45px",
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								":hover": {
									color: "#212121"
								},
							}}
							onClick={closeSidebar}


						>
							<IoCloseOutline size={26} color="#212121" />
						</Button>
					</Box>
					<Box sx={{ width: "97%", mx: "auto", pt: 3 }}>
						<Divider />
					</Box>
					<Box sx={{ my: 4 }}>
						<form
							noValidate
						>

							<Box sx={{
								mb: 3, bgcolor: "white", display: 'flex',
								flexDirection: 'column',
							}}>
								<Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											padding: "10px",
											backgroundColor: "white",
											marginBottom: "5px",
											width: "100%"
										}}>
										<Select
											filters={filters}
											setFilters={setFilters}
											data={status}
											name="status"
											value={filters!.status ?? "status"}
										/>
										<Select
											filters={filters}
											setFilters={setFilters}
											data={priority}
											name="priority"
											value={filters!.priority ?? "priority"}
										/>
									</div>
									<Button variant='outlined' sx={{color:"#212121"}} onClick={handleSub}>save</Button>
								</Box>

							</Box>

						</form>
					</Box>
				</Box>
			</Box>
		</Drawer>
	);
};

export default ManagedDrawer;
