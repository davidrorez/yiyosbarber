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
      <MDBContainer className='p-4' style={{marginTop: '0vh'}}>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>INFO</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a> Ubicación: Carillos, Alajuela.
                  </a>
                </li>
                <li>
                  <a> Teléfono: 72599204
                  </a>
                </li>
                <li>
                  <a> Email: test@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Productos</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a> Producto 1
                  </a>
                </li>
                <li>
                  <a> Producto 2
                  </a>
                </li>
                <li>
                  <a> Producto 3
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Redes</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Whatsapp
                  </a>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Horario</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a>
                    Lunes a Sabádo
                  </a>
                </li>
                <li>
                  <a>
                    De 7 am a 9 pm
                  </a>
                </li>
                <li>
                  <a>
                    Domingo cerrado
                  </a>
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