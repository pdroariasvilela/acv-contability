import { Button, Navbar } from "flowbite-react";

function NavbarItem() {
  return (
      <Navbar fluid  className="border-b">
      <Navbar.Brand href="">
        <img src="/public/logosinfondo.png" className="mr-3 h-[60px] sm:h-[80px]" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <Button color="failure" >Cotiza aqui</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link  href="#" >
          Inicio
        </Navbar.Link>
        <Navbar.Link  href="#">Servicios</Navbar.Link>
        <Navbar.Link  href="#">Clientes</Navbar.Link>
        <Navbar.Link  href="#">Contacto</Navbar.Link>
        <Navbar.Link  href="#">Blog</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarItem;
