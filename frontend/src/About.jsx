function About(){
    return(
        <div className="  py-10  air:px-9 gap-6 md:px-10 px-6 flex flex-col">
            <div className="flex flex-col gap-2  ">
                <img src="about.svg"  className="md:w-16 w-12" />
                <h1 className="font-poppins font-semibold text-2xl md:text-4xl "> About Epistemicon</h1>
            </div>
            <div className="flex flex-col  gap-4">
                <h1 className="  md:text-lg  text-gray-700 ">Epistemicon is an exciting inter-collegiate event that celebrates innovation, creativity, and talent. Organized by, Andhra Loyola Institute of Engineering and Technology  this event offers a platform for students from various colleges to come together, participate in a wide range of competitions, and showcase their skills across multiple domains. Whether you're passionate about technology, arts, literature, or science, Epistemicon has something for everyone.</h1>
                <h1 className="font-poppins text-gray-700 text-center text-lg md:text-xl font-medium">Join us on <div className="inline-flex text-green-600 text-xl font-poppins font-semibold items-center">September 28 2024</div>  and be a part of this celebration of talent and knowledge!</h1>

            </div>
            <img src="Epistemicon1.1.1.1.jpg" alt="2023 Epistemicon" className="w-full md:w-[800px] mx-auto md:h-[400px] h-[400px] rounded-2xl"/>
            <h1 className="text-xs md:text-sm text-center text-gray-400">Photograph clicked from Epistemicon-2023</h1>
            
        </div>
    );
}
export default About;