import {Soup} from 'lucide-react'

export function NavBar(){
    return <header className="flex justify-around p-3 glass">
        <div id="logo" className="flex gap-6 font-bold">
            <a href="#"><Soup/></a>
            <a href="#">Restaurante</a>
        </div>

        <nav className="flex gap-6">
            <a href="#">Inicio</a>
            <a href="#">Menú</a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Contacto</a>
        </nav>
    </header>
}