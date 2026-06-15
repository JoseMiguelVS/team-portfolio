export function Home(){
    return <section id="home">
        
        <div
        className="h-screen bg-[url('images/presentation.png')] bg-cover bg-center flex items-center justify-center flex-col gap-1"
        >
        <h1 className="font-bold text-6xl text-center text-border ">
            Bienvenido a nuestro restaurante
        </h1>

        <p className="text-center text-2xl text-foreground">Un lugar donde puedes disfrutar una excelente comida, servicio, charla o cita.</p>

        </div>

    </section>
    
}