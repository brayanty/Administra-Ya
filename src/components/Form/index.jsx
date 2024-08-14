import "./index.css";




function Form() {
    return (
        <div id="contacts" className="container m-0-auto flex flex-col items-center  bg-slate-100 backdrop-blur-sm hover p-4 mt-7 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="font-poppins font-bold text-2xl z-30">Formulario de Contacto</h4>
            <form className="flex flex-col gap-3 p-10 m-5  items-center space-y-4 z-30">
                <div>
                    <label htmlFor="name" className="font-bold">Nombre:</label>
                    <input type="text" name="name" id="name" placeholder="Jose Guerrero" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div>
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input type="email" name="email" id="email" placeholder="tuemail@email.com" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <label htmlFor="submit">
                    <input className="px-10 pt-2 pb-2 rounded-md transition-colors bg-green-400 font-semibold hover:font-bold hover:bg-green-600 " type="submit" />
                </label>
            </form>
        </div>
    )
}

export default Form;
