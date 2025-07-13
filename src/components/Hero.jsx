import heroImage from '../assets/profile-image.jpg';


export const Hero = () => {

return (
    <div className="container w-full max-h-screen my-20">
        <div className="flex justify-between items-center
                        max-sm:flex-col 
                        max-md:flex-col
                        max-lg:flex-col 
                        max-xl:flex-col 
                        ">
            <div className="text-4xl font-mono font-bold flex flex-col items-start
                            gap-2 text-wrap
                            max-sm:text-3xl max-sm:items-center
                            max-md:items-center 
                            max-lg:items-center 
                            max-xl:items-center
                            ">
                <p>Hello, I am Joshua Bajar</p>
                <p>I'm an aspiring <span className="text-primary">Front-End Developer</span></p>
            </div>
                <img src={heroImage} className="h-80 w-83 rounded-full max-sm:w-80 max-sm:h-80" />
        </div>
    </div>
)

}