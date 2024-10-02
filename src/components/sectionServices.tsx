import { Card } from "flowbite-react";

export default function SectionServices() {
    return (
        <div className='my-4 flex flex-wrap w-full justify-center gap-3 p-3'>
            <Card href="#" className="max-w-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Asesoría Contable
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Brindamos asesoría en contabilidad financiera y fiscal para empresas de todos los tamaños, asegurando el cumplimiento normativo y optimizando la carga tributaria.
                </p>
            </Card>

            <Card href="#" className="max-w-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gestión de Nóminas
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Nos encargamos de la gestión completa de nóminas, desde el cálculo de salarios hasta la presentación de impuestos, garantizando precisión y cumplimiento con la ley.
                </p>
            </Card>

            <Card href="#" className="max-w-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Auditorías y Revisión Financiera
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Realizamos auditorías internas y externas, así como revisiones financieras para garantizar la transparencia y exactitud en los estados financieros de su empresa.
                </p>
            </Card>
        </div>
    )
}