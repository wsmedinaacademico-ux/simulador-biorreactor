import { useState } from 'react'

import './index.css'

import BioreactorScene
from './components/BioreactorScene'

import TheorySection
from './components/TheorySection'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default function App() {

  // =====================================
  // VARIABLES CONTROLABLES
  // =====================================

  const [current, setCurrent] =
    useState(5)

  const [rho, setRho] =
    useState(1000)

  // =====================================
  // CONSTANTES
  // =====================================

  const magneticMoment = 0.05

  const phi = 45

  const A1 = 0.5

  const A2 = 1.0

  const v2 = 0.2

  // =====================================
  // ECUACIONES
  // =====================================

  const magneticField =
    current * 0.01

  const torque =
    magneticMoment *
    magneticField *
    Math.sin(
      phi * Math.PI / 180
    )

  const v1 =
    (A2 * v2) / A1

  const pressureDiff =
    0.5 *
    rho *
    (
      v1**2 -
      v2**2
    )

  // =====================================
  // ÍNDICE DE MEZCLA
  // =====================================

  const mixingIndex =

    (

      torque *

      Math.sqrt(
        Math.abs(pressureDiff)
      )

      *

      1200

    )

    /

    Math.pow(rho, 0.3)

  // =====================================
  // INTERPRETACIÓN
  // =====================================

  let interpretation = ''

  if (current < 3) {

    interpretation =

      'La corriente aplicada genera un campo magnético reducido, por lo que el torque inducido es insuficiente para desarrollar una mezcla turbulenta significativa. El flujo interno permanece relativamente ordenado.'

  }

  else if (

    current >= 3 &&
    current < 7

  ) {

    interpretation =

      'El sistema opera en un régimen de mezcla moderado. La energía electromagnética transferida al agitador produce recirculación efectiva y mejora progresiva del transporte convectivo.'

  }

  else {

    interpretation =

      'La elevada corriente eléctrica induce un campo magnético intenso y un torque elevado sobre la barra magnética. El reactor desarrolla un régimen hidrodinámico turbulento con alta recirculación y homogeneización del fluido.'

  }

  if (rho > 1250) {

    interpretation +=

      ' La alta densidad del fluido introduce efectos inerciales adicionales que amortiguan parcialmente la velocidad de mezcla.'

  }

  // =====================================
  // GRÁFICA 1
  // ELECTROMAGNETISMO → MECÁNICA
  // =====================================

  const electromagneticData = []

  for (let i = 1; i <= 10; i += 0.5) {

    const B = i * 0.01

    const tau =
      magneticMoment *
      B *
      Math.sin(
        phi * Math.PI / 180
      )

    electromagneticData.push({

      field: B,

      torque: tau

    })

  }

  // =====================================
  // GRÁFICA 2
  // MECÁNICA → HIDRODINÁMICA
  // =====================================

  const hydrodynamicData = []

  for (let i = 1; i <= 10; i += 0.5) {

    const B = i * 0.01

    const tau =
      magneticMoment *
      B *
      Math.sin(
        phi * Math.PI / 180
      )

    const dp =
      tau * 120000

    hydrodynamicData.push({

      torque: tau,

      pressure: dp

    })

  }

  return (

    <div className="app">

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="header">

        <h1>
          Simulador de Agitación Magnética
        </h1>

        <p>

          Interacción entre electromagnetismo,
          transferencia mecánica y dinámica
          de fluidos en un biorreactor.

        </p>

      </div>

      {/* ================================= */}
      {/* LAYOUT */}
      {/* ================================= */}

      <div

        style={{

          display: 'flex',

          gap: '30px',

          marginTop: '30px'

        }}

      >

        {/* ================================= */}
        {/* PANEL IZQUIERDO */}
        {/* ================================= */}

        <div

          style={{

            width: '420px',

            background: '#000000',

            padding: '25px',

            borderRadius: '22px',

            color: 'white'

          }}

        >

          <h2>
            Variables de Entrada
          </h2>

          {/* CORRIENTE */}

          <label>
            Corriente eléctrica [A]
          </label>

          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={current}
            onChange={(e)=>
              setCurrent(
                Number(e.target.value)
              )
            }
            style={{
              width: '100%'
            }}
          />

          <p>
            {current.toFixed(1)} A
          </p>

          {/* DENSIDAD */}

          <label>
            Densidad del fluido [kg/m³]
          </label>

          <input
            type="range"
            min="500"
            max="1500"
            step="10"
            value={rho}
            onChange={(e)=>
              setRho(
                Number(e.target.value)
              )
            }
            style={{
              width: '100%'
            }}
          />

          <p>
            {rho} kg/m³
          </p>

          {/* SALIDAS */}

          <hr />

          <h2>
            Variables de Salida
          </h2>

          <p>
            Campo magnético:
            <br />
            <strong>
              {magneticField.toFixed(3)} T
            </strong>
          </p>

          <p>
            Torque:
            <br />
            <strong>
              {torque.toFixed(5)} N·m
            </strong>
          </p>

          <p>
            ΔP:
            <br />
            <strong>
              {pressureDiff.toFixed(2)} Pa
            </strong>
          </p>

          <p>
            Índice de mezcla:
            <br />
            <strong>
              {mixingIndex.toFixed(4)}
            </strong>
          </p>

        </div>

        {/* ================================= */}
        {/* REACTOR */}
        {/* ================================= */}

        <div
          style={{
            flex: 1
          }}
        >

          <BioreactorScene

            current={current}

            rho={rho}

            torque={torque}

            pressureDiff={pressureDiff}

          />

        </div>

      </div>

      {/* ================================= */}
      {/* INTERPRETACIÓN */}
      {/* ================================= */}

      <div

        style={{

          marginTop: '35px',

          background: '#000000',

          padding: '30px',

          borderRadius: '20px',

          color: 'white',

          lineHeight: 1.7

        }}

      >

        <h2>
          Interpretación Física
        </h2>

        <p>
          {interpretation}
        </p>

      </div>

      {/* ================================= */}
      {/* GRÁFICAS */}
      {/* ================================= */}

      <div

        style={{

          display: 'grid',

          gridTemplateColumns:
            '1fr 1fr',

          gap: '25px',

          marginTop: '30px'

        }}

      >

        {/* ================================= */}
        {/* ELECTROMAGNÉTICA */}
        {/* ================================= */}

        <div

          style={{

            background: '#000000',

            padding: '20px',

            borderRadius: '20px'

          }}

        >

          <h2
            style={{
              color: 'white'
            }}
          >

            Campo Magnético vs Torque

          </h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart

              data={electromagneticData}

              margin={{

                top: 20,

                right: 20,

                left: 20,

                bottom: 45

              }}

            >

              <CartesianGrid stroke="#333" />

              <XAxis

                dataKey="field"

                type="number"

                domain={[0.01, 0.10]}

                ticks={[
                  0.01,
                  0.02,
                  0.03,
                  0.04,
                  0.05,
                  0.06,
                  0.07,
                  0.08,
                  0.09,
                  0.10
                ]}

                tickFormatter={(value)=>
                  value.toFixed(2)
                }

                stroke="#cecfd4"

                label={{

                  value:
                    'Campo Magnético B [T]',

                  position: 'insideBottom',

                  fill: '#ffffff',

                  offset: 15

                }}

              />

              <YAxis

                domain={[0, 0.004]}

                ticks={[
                  0,
                  0.001,
                  0.002,
                  0.003,
                  0.004
                ]}

                tickFormatter={(value)=>
                  value.toFixed(3)
                }

                stroke="#cecfd4"

                label={{

                  value:
                    'Torque τ [N·m]',

                  angle: -90,

                  position: 'insideLeft',

                  fill: '#ffffff'

                }}

              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="torque"
                stroke="#5454e9"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* ================================= */}
        {/* HIDRODINÁMICA */}
        {/* ================================= */}

        <div

          style={{

            background: '#000000',

            padding: '20px',

            borderRadius: '20px'

          }}

        >

          <h2
            style={{
              color: 'white'
            }}
          >

            Torque vs ΔP

          </h2>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart

              data={hydrodynamicData}

              margin={{

                top: 20,

                right: 20,

                left: 20,

                bottom: 45

              }}

            >

              <CartesianGrid stroke="#333" />

              <XAxis

                dataKey="torque"

                type="number"

                domain={[0, 0.004]}

                ticks={[
                  0,
                  0.001,
                  0.002,
                  0.003,
                  0.004
                ]}

                tickFormatter={(value)=>
                  value.toFixed(3)
                }

                stroke="#cecfd4"

                label={{

                  value:
                    'Torque τ [N·m]',

                  position: 'insideBottom',

                  fill: '#ffffff',

                  offset: 15

                }}

              />

              <YAxis

                domain={[0, 600]}

                ticks={[
                  0,
                  150,
                  300,
                  450,
                  600
                ]}

                tickFormatter={(value)=>
                  value.toFixed(0)
                }

                stroke="#cecfd4"

                label={{

                  value:
                    'ΔP [Pa]',

                  angle: -90,

                  position: 'insideLeft',

                  fill: '#ffffff'

                }}

              />

              <Tooltip

                contentStyle={{

                  background: '#111827',

                  border: '1px solid #865cf0',

                  borderRadius: '12px',

                  color: 'white'

                }}

                formatter={(value)=>
                  Number(value).toFixed(3)
                }

              />

              <Line
                type="monotone"
                dataKey="pressure"
                stroke="#865cf0"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      <TheorySection />

    </div>

  )

}