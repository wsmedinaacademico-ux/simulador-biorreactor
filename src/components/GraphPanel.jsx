export default function GraphPanel({

  current,
  magneticField,
  torque,
  pressureDiff

}) {

  return (

    <div className="graphs">

      <h2>
        Correlaciones Físicas
      </h2>

      <p>
        Mayor corriente →
        mayor campo magnético →
        mayor torque →
        mayor agitación.
      </p>

      <p>
        Mayor velocidad →
        mayor diferencia de presión →
        mezcla más intensa.
      </p>

    </div>

  )

}