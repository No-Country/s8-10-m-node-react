import disney from '../assets/images/services/disneyplus.svg'
import taxes from '../assets/images/services/files.svg'
import hboMax from '../assets/images/services/hbo-max.svg'
import light from '../assets/images/services/light.svg'
import netflix from '../assets/images/services/netflix.svg'
import parking from '../assets/images/services/park.svg'
import spotify from '../assets/images/services/spotify.svg'
import transport from '../assets/images/services/vehicle.svg'
import water from '../assets/images/services/water.svg'
import wifi from '../assets/images/services/wifi.svg'

export const SERVICES = [
  {
    name: 'Disney+',
    svg: disney,
    path: 'disney',
    bgColor: 'bg-gradient-to-t from-blue-900 to-blue-950'
  },
  {
    name: 'Spotify',
    svg: spotify,
    path: 'spotify',
    bgColor: 'bg-gradient-to-t from-green-800 to-emerald-950'
  },
  {
    name: 'Netflix',
    svg: netflix,
    path: 'netflix',
    bgColor: 'bg-gradient-to-b from-red-900 to-red-950'
  },
  {
    name: 'Wi-Fi',
    svg: wifi,
    path: 'wifi'
  },
  {
    name: 'Luz',
    svg: light,
    path: 'light'
  },

  {
    name: 'Agua',
    svg: water,
    path: 'water'
  },
  {
    name: 'Impuestos',
    svg: taxes,
    path: 'taxes'
  },
  {
    name: 'Estacionamiento',
    svg: parking,
    path: 'parking'
  },
  {
    name: 'Transporte',
    svg: transport,
    path: 'transport'
  },
]