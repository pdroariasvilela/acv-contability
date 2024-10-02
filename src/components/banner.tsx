import { Button } from "flowbite-react";
import Banner1 from "../../public/img/banner1.png"
import Banner2 from "../../public/img/banner2.png"
import Asesoria from "../../public/img/asesoria-contable.png"

export default function Banner() {
    return (
        <div className="m-auto flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-[url('/public/background.png')] lg:flex-row">
            {/* Contenedor del texto */}
            <div className="flex flex-col items-center p-6 text-center sm:w-full lg:w-1/2 lg:p-[100px]">
                <h1 className="text-2xl font-bold sm:text-xl lg:text-3xl">
                    Expertos en asesoría empresarial y contable en el Perú
                </h1>
                <p className="mt-4 text-lg sm:text-base lg:text-xl">
                    Descubre cómo nuestra experiencia puede llevar a tu empresa hacia nuevos horizontes de éxito.
                </p>
                <Button className="mt-10" color={"failure"}>
                    Contáctanos
                </Button>
            </div>

            {/* Contenedor de las imágenes */}
            <div className="relative p-6 sm:w-full lg:w-1/2">
                <img
                    className="h-[300px] w-full rounded-3xl object-contain lg:h-[400px]"
                    src={Banner1}
                    alt="App Servicio"
                />

                {/* Segunda imagen posicionada dentro del contenedor */}
                <img
                    className="absolute bottom-0 h-[100px] w-auto rounded-3xl object-contain  lg:right-[430px] lg:h-[200px]"
                    src={Banner2}
                    alt="App Servicio"
                />

                {/* Tercera imagen */}
                <img
                    className="absolute bottom-[200px] right-[200px] h-[50px] w-auto rounded-3xl object-contain lg:bottom-[250px] lg:right-[450px] lg:h-[100px]"
                    src={Asesoria}
                    alt="App Servicio"
                />
            </div>
        </div>
    );
}