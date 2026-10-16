// Líneas de peering que salen desde detrás del retrato hacia el resto de Internet.
// Se trazan una sola vez al cargar. Los puntos no representan redes concretas.

const center = { x: 300, y: 320 }

const peers = [
  [40, 90], [10, 300], [60, 560], [250, 630], [470, 610],
  [590, 420], [580, 170], [430, 10], [180, 20], [590, 600], [20, 450],
]

function curve([x, y], bend) {
  const mx = (center.x + x) / 2
  const my = (center.y + y) / 2
  const dx = x - center.x
  const dy = y - center.y
  return `M${center.x},${center.y} Q${mx - dy * bend},${my + dx * bend} ${x},${y}`
}

export default function RouteMap() {
  return (
    <svg className="routemap" viewBox="0 0 600 640" aria-hidden="true">
      <g className="routemap__links">
        {peers.map((p, i) => (
          <path key={i} d={curve(p, i % 2 ? 0.14 : -0.1)} pathLength="1" style={{ '--i': i }} />
        ))}
      </g>
      {peers.map(([x, y], i) => (
        <circle key={i} className="routemap__peer" cx={x} cy={y} r="6" style={{ '--i': i }} />
      ))}
    </svg>
  )
}
