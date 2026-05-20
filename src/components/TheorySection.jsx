export default function TheorySection() {

  return (

    <div

      style={{

        marginTop: '40px',

        background: '#000000',

        borderRadius: '24px',

        padding: '40px',

        color: 'white',

        lineHeight: 1.8,

        border: '1px solid #222',

      }}

    >

      {/* ================================= */}
      {/* TÍTULO */}
      {/* ================================= */}

      <h1

        style={{

          color: '#e4eb60',

          marginBottom: '25px',

          fontSize: '38px',

          fontWeight: 'bold'

        }}

      >

        FUNDAMENTO FÍSICO-MATEMÁTICO

      </h1>

      {/* ================================= */}
      {/* INTRODUCCIÓN */}
      {/* ================================= */}

      <p

        style={{

          fontSize: '20px',

          color: '#cecfd4',

          marginBottom: '40px'

        }}

      >

        El presente simulador representa un
        sistema simplificado de agitación
        magnética aplicado a un biorreactor
        cilíndrico. El modelo integra
        principios de electromagnetismo,
        transferencia mecánica y dinámica
        de fluidos para analizar el
        comportamiento hidrodinámico del
        medio en función de variables
        físicamente controlables.

      </p>

      {/* ================================= */}
      {/* TORQUE */}
      {/* ================================= */}

      <section style={{ marginBottom: '45px' }}>

        <h2

          style={{

            color: '#5454e9',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          TORQUE MAGNÉTICO

        </h2>

        <div

          style={{

            fontSize: '34px',

            textAlign: 'center',

            margin: '25px 0',

            color: '#ffffff'

          }}

        >

          τ = mB sin(φ)

        </div>

        <p>

          El torque magnético representa la
          transferencia de energía entre el
          campo magnético inducido y la barra
          magnética del reactor. El campo B
          depende directamente de la corriente
          eléctrica aplicada al sistema,
          mientras que el torque generado
          determina la intensidad de la
          agitación mecánica.

        </p>

        <ul>

          <li>
            τ → Torque magnético [N·m]
          </li>

          <li>
            m → Momento magnético de la barra
          </li>

          <li>
            B → Campo magnético inducido [T]
          </li>

          <li>
            φ → Ángulo entre dipolo y campo
          </li>

        </ul>

        <p>

          En este proyecto se considera:
          momento magnético constante y
          ángulo fijo de 45°.

        </p>

      </section>

      {/* ================================= */}
      {/* CONTINUIDAD */}
      {/* ================================= */}

      <section style={{ marginBottom: '45px' }}>

        <h2

          style={{

            color: '#865cf0',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          ECUACIÓN DE CONTINUIDAD

        </h2>

        <div

          style={{

            fontSize: '34px',

            textAlign: 'center',

            margin: '25px 0'

          }}

        >

          A₁v₁ = A₂v₂

        </div>

        <p>

          La ecuación de continuidad expresa
          conservación de masa para un fluido
          incompresible. En el contexto del
          reactor, permite relacionar las
          velocidades internas del fluido con
          las áreas efectivas de circulación.

        </p>

        <ul>

          <li>
            A → Área transversal [m²]
          </li>

          <li>
            v → Velocidad del fluido [m/s]
          </li>

        </ul>

      </section>

      {/* ================================= */}
      {/* BERNOULLI */}
      {/* ================================= */}

      <section style={{ marginBottom: '45px' }}>

        <h2

          style={{

            color: '#4cb979',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          RELACIÓN HIDRODINÁMICA

        </h2>

        <div

          style={{

            fontSize: '34px',

            textAlign: 'center',

            margin: '25px 0'

          }}

        >

          ΔP = ½ρ(v₁² − v₂²)

        </div>

        <p>

          Esta relación simplificada deriva
          del principio de Bernoulli y
          representa cómo las diferencias
          de velocidad dentro del reactor
          producen variaciones de presión
          y recirculación hidrodinámica.

        </p>

        <ul>

          <li>
            ΔP → Diferencia de presión [Pa]
          </li>

          <li>
            ρ → Densidad del fluido [kg/m³]
          </li>

        </ul>

      </section>

      {/* ================================= */}
      {/* ÍNDICE */}
      {/* ================================= */}

      <section style={{ marginBottom: '45px' }}>

        <h2

          style={{

            color: '#e9683b',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          ÍNDICE DE MEZCLA

        </h2>

        <p>

          El índice de mezcla utilizado en
          este simulador corresponde a una
          aproximación fenomenológica
          simplificada que busca representar
          el acoplamiento entre:
          transferencia electromagnética,
          torque mecánico y respuesta
          hidrodinámica del fluido.

        </p>

        <p>

          Aunque no representa una ecuación
          estándar de la literatura, permite
          interpretar tendencias físicas de
          mezcla y recirculación de manera
          visual y pedagógica.

        </p>

      </section>

      {/* ================================= */}
      {/* SUPOSICIONES */}
      {/* ================================= */}

      <section style={{ marginBottom: '45px' }}>

        <h2

          style={{

            color: '#e4eb60',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          SUPOSICIONES DEL MODELO

        </h2>

        <ul>

          <li>
            Fluido incompresible
          </li>

          <li>
            Régimen isotérmico
          </li>

          <li>
            Geometría cilíndrica ideal
          </li>

          <li>
            Barra magnética uniforme
          </li>

          <li>
            Campo magnético homogéneo
          </li>

          <li>
            Flujo turbulento simplificado
          </li>

          <li>
            Sin modelado biológico celular
          </li>

        </ul>

      </section>

      {/* ================================= */}
      {/* LIMITACIONES */}
      {/* ================================= */}

      <section>

        <h2

          style={{

            color: '#88898c',

            fontSize: '30px',

            marginBottom: '15px'

          }}

        >

          LIMITACIONES DEL MODELO

        </h2>

        <ul>

          <li>
            No se resuelven ecuaciones
            completas de Navier-Stokes
          </li>

          <li>
            No se modela viscosidad variable
          </li>

          <li>
            No se consideran microorganismos
          </li>

          <li>
            El campo magnético es aproximado
          </li>

          <li>
            La turbulencia es representada
            visualmente mediante partículas
          </li>

        </ul>

      </section>

    </div>

  )

}