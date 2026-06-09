import {Soup} from 'lucide-react'

export function NavBar(){
    return <header className="flex top-0 left-0 w-full z-50 justify-around p-3 glass fixed">
        <div id="logo" className="flex gap-6 font-bold">
            <a href="#home" className="hover-foreground"><Soup/></a>
            <a href="#home" className="hover-foreground">Restaurante</a>
        </div>

        <nav className="flex gap-6">
            <a href="#home" className="hover-foreground">Inicio</a>
            <a href="#" className="hover-foreground">Menú</a>
            <a href="#about" className="hover-foreground">Sobre nosotros</a>
            <a href="#" className="hover-foreground">Contacto</a>
        </nav>
    </header>
}