const plans = [
    {
      title: 'Plan Básico',
      price: 150,
      period: 'mes',
      features: [
        { name: 'Registro de libros contables compra y venta', included: true },
        { name: 'Declaración de impuestos PDT (IGV-Renta)', included: true },
        { name: 'Asesoría inicial', included: true },
      ],
      buttonText: 'Contactar con un asesor',
    },
    {
      title: 'Plan Avanzado',
      price: 200,
      period: 'mes',
      features: [
        { name: 'Registro de libros contables compra y venta', included: true },
        { name: 'Declaración de impuestos PDT (IGV-Renta)', included: true },
        { name: 'Atención de consultas', included: true },
        { name: 'Asesoría inicial', included: true },
        { name: '1 trabajador en planilla', included: true },
      ],
      buttonText: 'Contactar con un asesor',
    },
    {
      title: 'Plan Premium',
      price: 250,
      period: 'mes',
      features: [
        { name: 'Registro de libros contables compra y venta', included: true },
        { name: 'Declaración de impuestos PDT (IGV-Renta)', included: true },
        { name: 'Atención de consultas', included: true },
        { name: 'Asesoría inicial', included: true },
        { name: '2 trabajadores en planilla', included: true },
        { name: '3 asesorías personalizadas', included: true },
      ],
      buttonText: 'Contactar con un asesor',
    }
]

  export default plans