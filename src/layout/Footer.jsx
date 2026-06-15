import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'

export function Footer(){
    return <footer id="footer" className="bg-primary py-12 px-6 flex justify-between">
        <div id="rigths" className="flex flex-col gap-2">
            <a href="#" className="text-background font-bold">Restaurante<span className="text-secondary">.</span> </a>
            <p className="text-foreground">© 2026 Restaurante. Todos los derechos reservados.</p>
        </div>

        <div id="sections" className="text-background flex gap-4 items-center">
            <a href="#home">Inicio</a>
            <a href="#menu">Menú</a>
            <a href="#about">Sobre nosotros</a>
            <a href="#contact">Contacto</a>
        </div>

        <div id="contact-footer" className="text-4xl flex gap-4 text-background items-center">
            <a href="#instagram"> <FaInstagram/> </a>
            <a href="#facebook"> <FaFacebook/> </a>
            <a href="#Whatsapp"> <FaWhatsapp/> </a>
        </div>
    </footer>
}

export default Footer