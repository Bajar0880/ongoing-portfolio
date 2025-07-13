import { ThemeToggle } from "./ThemeToggle";


export const Header = () => {

return (
    <div>
        <header className="container w-full flex justify-between items-center h-15 
                            min-sm:mt-0 max-md:mt-0
        ">
           <a href="#">
                <span 
                    className=" font-bold font-mono text-3xl 
                        max-sm:ml-0 max-sm:pl-0
                        max-md:ml-0 max-md:pl-0 
                        max-xl:ml-0 max-xl:pl-0">
                                                JoshB
                 </span>
            </a>
            <nav>
                <ThemeToggle />
                <ul className="flex gap-10 text-xl font-mono cursor-pointer max-sm:hidden px-5">
                    <a className="hover:text-primary" href="#aboutme"><li>About</li></a>
                    <a className="hover:text-primary" href="#"><li>Projects</li></a>
                    <a className="hover:text-primary" href="#"><li>Contacts</li></a>
                </ul>
            </nav>
        </header>
    </div>
)

}