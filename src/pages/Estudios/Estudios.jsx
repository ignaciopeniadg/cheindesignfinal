import React from 'react'
import './estudios.css'

function Estudios() {
  return (
    <section id='estudios'>
    <h5>Leveleando mis</h5>
    <h2>Skills</h2>

    <div className='container skills__container'>
      <div className='skills__design'>
        <h3>Diseño Gráfico</h3>
        <div className='skills__contenido'>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              
              <h4>Illustrator</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>Photoshop</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>InDesign</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>Premiere Pro</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>After Effects</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
        </div>
      </div>
      <div className='skills__frontend'>
        <h3>Desarrollo Front-End</h3>
        <div className='skills__contenido'>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>HTML</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>CSS</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>Bootstrap</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>SASS</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>JavaScript</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
          <article className='skills__detalle'>
            <div className='skills__nombre'>
              <h4>React Js</h4>
            </div>
            <div className='skills__estrellas'>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export { Estudios }