export default function ControlPanel(props) {

  return (

    <div className="panel">

      <h2>
        Variables de Entrada
      </h2>

      <label>
        Corriente eléctrica [A]
      </label>

      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={props.current}
        onChange={(e) =>
          props.setCurrent(
            Number(e.target.value)
          )
        }
      />

      <label>
        Momento magnético
      </label>

      <input
        type="range"
        min="0.01"
        max="0.2"
        step="0.01"
        value={props.magneticMoment}
        onChange={(e) =>
          props.setMagneticMoment(
            Number(e.target.value)
          )
        }
      />

      <label>
        Ángulo φ
      </label>

      <input
        type="range"
        min="0"
        max="90"
        value={props.phi}
        onChange={(e) =>
          props.setPhi(
            Number(e.target.value)
          )
        }
      />

      <label>
        Densidad ρ
      </label>

      <input
        type="range"
        min="500"
        max="1500"
        step="10"
        value={props.rho}
        onChange={(e) =>
          props.setRho(
            Number(e.target.value)
          )
        }
      />

    </div>

  )

}