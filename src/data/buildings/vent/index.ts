import type { BuildCategory } from '../types'
import rocket_port_gas_unloader from './rocket_port_gas_unloader'
import rocket_port_gas_loader from './rocket_port_gas_loader'
import insulated_gas_conduit from './insulated_gas_conduit'
import high_pressure_vent from './high_pressure_vent'
import gas_conduit from './gas_conduit'
import gas_vent from './gas_vent'
import gas_conduit_bridge from './gas_conduit_bridge'
import gas_conduit_thermal from './gas_conduit_thermal'
import gas_pump from './gas_pump'
import mini_gas_pump from './mini_gas_pump'
import dev_gas_pump from './dev_gas_pump'
import gas_conduit_germ_sensor from './gas_conduit_germ_sensor'
import gas_conduit_element_sensor from './gas_conduit_element_sensor'
import gas_conduit_temperature_sensor from './gas_conduit_temperature_sensor'
import gas_valve from './gas_valve'
import canister_emptier from './canister_emptier'
import canister_emptier_2 from './canister_emptier_2'
import gas_filter from './gas_filter'
import gas_bottler from './gas_bottler'
import gas_shutoff from './gas_shutoff'
import gas_conduit_meter from './gas_conduit_meter'

const vent: BuildCategory = {
    id: 'vent',
    name: '通风',
    icon: '⇄',
    buildings: [
        rocket_port_gas_unloader,
        rocket_port_gas_loader,
        insulated_gas_conduit,
        high_pressure_vent,
        gas_conduit,
        gas_vent,
        gas_conduit_bridge,
        gas_conduit_thermal,
        gas_pump,
        mini_gas_pump,
        dev_gas_pump,
        gas_conduit_germ_sensor,
        gas_conduit_element_sensor,
        gas_conduit_temperature_sensor,
        gas_valve,
        canister_emptier,
        canister_emptier_2,
        gas_filter,
        gas_bottler,
        gas_shutoff,
        gas_conduit_meter,
    ],
}

export default vent
