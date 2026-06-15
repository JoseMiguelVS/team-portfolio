import {Phone, Mail, Map} from "lucide-react";

export const Contact = () => {

    return (
            <section id="contact" className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                                    Contactanos
                                </h2>
                                <p>
                                    Pregunta por nuestros diferentes servicios, horarios y reservas. Estamos aquí para ayudarte a vivir una experiencia culinaria inolvidable.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 animate-fade-in animation-delay-200 glass p-6 rounded-2xl">
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted">Teléfono</p>
                                    <p className="text-2xl font-semibold">241-156-86-12</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted">Email</p>
                                    <p className="text-2xl font-semibold">Restaurante@gajoaleda.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Map className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="text-sm text-muted">Ubicación</p>
                                    <p className="text-2xl font-semibold">Calle Naranjos 456, Apizaco, Tlaxcala</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};