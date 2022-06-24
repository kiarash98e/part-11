/* eslint-disable react-hooks/exhaustive-deps */
import  React  from  "react";

const  ThemeContext  =  React.createContext(false);
ThemeContext.displayName = "ThemeContext"

const useTheme = () => {
    const context = React.useContext(ThemeContext)
    if (context === undefined) {
      throw new Error(`useTheme must be used within a ThemeProvider`)
    }
    return context
}

const  ThemeProvider:React.FC<any>  =  (props)  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);

};

const value = React.useMemo(
    () => ({
        toggle,
        toggleFunction
    }),
    [toggle]
)
return  (
    <ThemeContext.Provider value={value} {...props} />
    );
};
export  { ThemeProvider,useTheme };