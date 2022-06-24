import React from 'react'
import { useUI } from "../../context/uiContext";
import { Drawer } from "./drawer";
import { useTheme } from '../../context/theme/themeContext'
import theme from '../../theme/theme';

const ManagedDrawer:React.FC<any> = ({children}) => {
	const { displaySideBar, closeSidebar } = useUI();
	const { toggle } : any | boolean = useTheme()
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
			{children}
		</Drawer>
	);
};

export default ManagedDrawer;
