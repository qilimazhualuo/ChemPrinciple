import type { BuildCategory } from '../types'
import oxyfern from './oxyfern'
import electrolyzer from './electrolyzer'
import sublimation_station from './sublimation_station'
import rust_deoxidizer from './rust_deoxidizer'
import oxygen_diffuser from './oxygen_diffuser'
import carbon_skimmer from './carbon_skimmer'
import algae_terrarium from './algae_terrarium'
import air_filter from './air_filter'

const oxygen: BuildCategory = {
    id: 'oxygen',
    name: '氧气',
    desc: '',
    icon: '◎',
    buildings: [
        oxyfern,
        electrolyzer,
        sublimation_station,
        rust_deoxidizer,
        oxygen_diffuser,
        carbon_skimmer,
        algae_terrarium,
        air_filter,
    ],
}

export default oxygen
