import {Soup} from 'lucide-react'

export function NavBar(){
    return <header className="flex justify-around p-3 glass">
        <div id="logo" className="flex gap-6 font-bold">
            <a href="#" className="hover-foreground"><Soup/></a>
            <a href="#" className="hover-foreground">Restaurante</a>
        </div>

        <nav className="flex gap-6">
            <a href="#" className="hover-foreground">Inicio</a>
            <a href="#" className="hover-foreground">Menú</a>
            <a href="#" className="hover-foreground">Sobre nosotros</a>
            <a href="#" className="hover-foreground">Contacto</a>
        </nav>
    </header>
}