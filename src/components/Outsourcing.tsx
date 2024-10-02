export default function Outsourcing() {
    return (
      <div className='flex flex-col lg:flex-row w-[90%] items-center justify-center bg-slate-50 lg:p-10 rounded-2xl'>
  
        <div className='w-full lg:w-1/2 lg:p-5'>
          <h1 className="mb-5 text-2xl font-bold text-slate-800">Outsourcing contable</h1>
          <p className='text-start text-gray-500'>
            Delega la contabilidad de tu negocio a nuestro estudio contable en Lima. Así evitarás posibles multas o sanciones de la Sunat, no tendrás que corregir errores futuros y tendrás más tiempo para enfocarte en impulsar tu negocio.
          </p>
  
          <div className='mt-[50px] flex flex-col gap-3'>
            <p className='text-start text-gray-500 flex'>
              <img src="/public/arrow-right-circle-fill.svg" className="w-5 mx-3" />
              Registro de ventas y compras.
            </p>
            <p className='text-start text-gray-500 flex'>
              <img src="/public/arrow-right-circle-fill.svg" className="w-5 mx-3" />
              Gestión de documentos contables
            </p>
            <p className='text-start text-gray-500 flex'>
              <img src="/public/arrow-right-circle-fill.svg" className="w-5 mx-3" />
              Declaración de impuestos IGV - Renta
            </p>
          </div>
        </div>
  
        <div className='w-full lg:w-1/2 my-10'>
          <img src="/src/assets/outsourcing-img.png" alt="Outsourcing contable" className="h-[200px] w-full rounded-3xl object-contain md:h-[250px] lg:h-[300px]" />
        </div>
  
      </div>
    )
  }