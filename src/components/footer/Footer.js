import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center' style={{ backgroundColor: '#efe3d0' }} >
      <MDBContainer className='p-4' style={{ marginTop: '0vh' }}>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5>INFO</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                   Ubicación: Carillos, Alajuela.
                </li>
                <li>
                   Teléfono: 72599204
                </li>
                <li>
                  Email: test@gmail.com
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Productos</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  Producto 1
                </li>
                <li>
                  Producto 2
                </li>
                <li>
                  Producto 3
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Redes</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.facebook.com/barberiayiyosoficial' >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/barberia_yiyos/'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='https://wa.me/50672599204' >
                    Whatsapp
                  </a>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Horario</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  Lunes a Sabádo
                </li>
                <li>
                  De 7 am a 9 pm
                </li>
                <li>
                  Domingo cerrado
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}
export default Footer;