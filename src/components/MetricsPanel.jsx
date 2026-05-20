export default function MetricsPanel({
  magneticField,
  torque,
  v1,
  pressureDiff,
  mixingIndex
}) {

  return (

    <div className="panel">

      <h2>
        Variables de Salida
      </h2>

      <div className="metric">
        Campo B:
        {magneticField.toFixed(3)} T
      </div>

      <div className="metric">
        Torque:
        {torque.toFixed(5)} N·m
      </div>

      <div className="metric">
        Velocidad v₁:
        {v1.toFixed(3)} m/s
      </div>

      <div className="metric">
        ΔP:
        {pressureDiff.toFixed(2)} Pa
      </div>

      <div className="metric">
        Índice de mezcla:
        {mixingIndex.toFixed(2)}
      </div>

    </div>

  )

}