

export const AboutMe = () => {

    return (
        <div id="aboutme" className="container max-h-screen">
            <div className="text-4xl font-bold">
                <span className="font-mono text-primary">
                    About Me
                </span>
                <hr className="m-auto w-30 border-2 rounded-md border-indigo-400 opacity-50"/>
            </div>
            <div className="mt-5 py-5 px-5 w-250 tracking-wide m-auto font-mono font-bold text-left text-xl 
                            border-transparent rounded-md shadow-2xl
                            max-sm:w-100 max-sm:text-sm
                            max-md:w-130 max-md:text-lg
                            max-lg:w-200
                            ">
                <p className="">
                    I'm a aspiring web developer with a strong interest in frontend development.
                    While I haven't yet had the opportunity to work on real-world projects, 
                    I'm passionate about learning how to create beautiful, responsive websites that prioritize great user experiences. 
                    I'm excited to dive deeper into web development and grow my skills, 
                    and I'm eager to contribute to projects and continue expanding my knowledge.
                </p>
            </div>

        </div>
    )
}