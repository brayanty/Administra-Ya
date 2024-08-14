import './index.css';
import Form from '../Form'

function Contacts() {

    return (
        <section className="mt-10 container m-0-auto flex justify-center items-center gap-4 flex-wrap">
            <header className="flex gap-3 flex-col flex-wrap font-poppins text-white items-center mx-3">
                    <h5 className="font-bold text-4xl">Contactos</h5>
                    <p className="text-center text-wrap">Si deseas adquirir mis servicios, comunicate por los siguiente medios</p>
                <ul className="flex gap-6 flex-wrap text-slate-300">
                    <li><a href="https://x.com/ElBrayanP21" target="_blank" rel="noopener noreferrer"><i className="hover:scale-125 transition-transform fa-brands fa-x-twitter fa-2x xl:fa-2x"></i></a></li>
                    <li><a href="https://github.com/brayanty" target="_blank" rel="noopener noreferrer"><i className="hover:scale-125 transition-transform fa-brands fa-github fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/el-brayan-p-4b9210261/" target="_blank" rel="noopener noreferrer"><i className="hover:scale-125 transition-transform fa-brands fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/el-brayan-p-4b9210261/" target="_blank" rel="noopener noreferrer"><i className="hover:scale-125 transition-transform fa-brands fa-instagram fa-2x"></i></a></li>
                </ul>
            </header>
            <Form/>
        </section>
    )
}

export default Contacts 