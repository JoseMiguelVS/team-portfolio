import {Soup} from 'lucide-react'

export function NavBar(){
    return <header className="flex top-0 left-0 w-full z-50 justify-around p-3 glass fixed">
        <div id="logo" className="flex gap-6 font-bold">
            <a href="#home" className="hover:text-background"><Soup/></a>
            <a href="#home" className="hover:text-background">Restaurante</a>
        </div>

        <nav className="flex gap-6">
            <a href="#home" className="hover:text-background">Inicio</a>
<<<<<<< HEAD
            <a href="#" className="hover:text-background">Menú</a>
=======
            <a href="#menu" className="hover:text-background">Menú</a>
>>>>>>> 87ab1cca7ea38705e449134a658d91d91ce81e36
            <a href="#about" className="hover:text-background">Sobre nosotros</a>
            <a href="#" className="hover:text-background">Contacto</a>
        </nav>
    </header>
}