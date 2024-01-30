const Footer = () => {
    return (
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Contacto</h5>
              <p>Dirección: Calle de las Pastas, Número 123</p>
              <p>Teléfono: +123 456 789</p>
              <p>Email: info@pastaspagina.com</p>
            </div>
            <div className="col-md-6">
              <h5>Síguenos en Redes Sociales</h5>
              {}
              <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  