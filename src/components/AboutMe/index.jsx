import "./index.css";
import backgroundAboutMe from "/src/assets/waifuDev.webp"

function AboutMe() {

    return (
        <section id="aboutme" className="flex items-center flex-row-reverse max-md:flex-col justify-center p-6 gap-5">
            <figure className="w-60 h-60 relative mt-4">
                <div className="bg-cover bg-center rounded-full w-full h-full absolute top-0 left-0" style={{ backgroundImage: `url(${backgroundAboutMe}` }}></div>
            </figure>
            <header className="text-slate-200 text-center mt-3">
                <h3 className="text-2xl font-semibold font-poppins"> <span className="text-teal-200"> I am, </span>Brayan Palacios (Web Developer)</h3>
                <p className="text-base font-poppins">I'm here to help you with whatever you need ❤️</p>
            </header>
        </section>
    );
}

export default AboutMe