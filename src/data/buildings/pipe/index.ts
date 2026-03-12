import type { BuildCategory } from '../types'
import rocket_port_liquid_loader from './rocket_port_liquid_loader'
import rocket_port_liquid_unloader from './rocket_port_liquid_unloader'
import liquid_conduit_bridge from './liquid_conduit_bridge'
import liquid_conduit_thermal from './liquid_conduit_thermal'
import liquid_conduit from './liquid_conduit'
import liquid_vent from './liquid_vent'
import insulated_liquid_conduit from './insulated_liquid_conduit'
import liquid_conduit_thermal_2 from './liquid_conduit_thermal_2'
import liquid_pump from './liquid_pump'
import dev_liquid_pump from './dev_liquid_pump'
import mini_liquid_pump from './mini_liquid_pump'
import hand_pump from './hand_pump'
import liquid_conduit_element_sensor from './liquid_conduit_element_sensor'
import liquid_conduit_germ_sensor from './liquid_conduit_germ_sensor'
import liquid_conduit_temperature_sensor from './liquid_conduit_temperature_sensor'
import liquid_bottler from './liquid_bottler'
import bottle_emptier from './bottle_emptier'
import liquid_valve from './liquid_valve'
import bottle_emptier_2 from './bottle_emptier_2'
import liquid_conduit_meter from './liquid_conduit_meter'
import liquid_filter from './liquid_filter'
import liquid_shutoff from './liquid_shutoff'
import flush_toilet from './flush_toilet'
import shower from './shower'
import outhouse from './outhouse'
import oil_well_extractor from './oil_well_extractor'
import wall_toilet from './wall_toilet'

const pipe: BuildCategory = {
    id: 'pipe',
    name: '水管',
    icon: '⊟',
    buildings: [
        rocket_port_liquid_loader,
        rocket_port_liquid_unloader,
        liquid_conduit_bridge,
        liquid_conduit_thermal,
        liquid_conduit,
        liquid_vent,
        insulated_liquid_conduit,
        liquid_conduit_thermal_2,
        liquid_pump,
        dev_liquid_pump,
        mini_liquid_pump,
        hand_pump,
        liquid_conduit_element_sensor,
        liquid_conduit_germ_sensor,
        liquid_conduit_temperature_sensor,
        liquid_bottler,
        bottle_emptier,
        liquid_valve,
        bottle_emptier_2,
        liquid_conduit_meter,
        liquid_filter,
        liquid_shutoff,
        flush_toilet,
        shower,
        outhouse,
        oil_well_extractor,
        wall_toilet,
    ],
}

export default pipe
