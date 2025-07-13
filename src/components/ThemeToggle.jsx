import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useEffect, useState } from "react"


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

            if(storedTheme === "dark"){
                setIsDarkMode(true)
                document.documentElement.classList.add("dark")
            } else {
                setIsDarkMode(false)  
            }
    },[])

    
    const ToggleTheme = () => {
        if(isDarkMode){
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    }


    return (
        <button onClick={ToggleTheme} 
                className="fixed top-5 rounded-full 
                            transition-colors duration-300 cursor-pointer
                            min-sm:right-2
                            min-md:right-2
                            min-xl:right-5"
                            >
             {isDarkMode ? (
                <Sun className="h-9 w-9 text-yellow-300"/>
             )
             : (
                <Moon className="h-9 w-9 text-primary"/>
             )}
        </button>
    )
}