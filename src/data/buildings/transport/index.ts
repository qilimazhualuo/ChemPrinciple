import type { BuildCategory } from '../types'
import sweeper from './sweeper'
import auto_miner from './auto_miner'
import rocket_port_solid_unloader from './rocket_port_solid_unloader'
import rocket_port_solid_loader from './rocket_port_solid_loader'
import conveyor_chute from './conveyor_chute'
import conveyor_rail from './conveyor_rail'
import conveyor_receptacle from './conveyor_receptacle'
import conveyor_loader from './conveyor_loader'
import solid_filter from './solid_filter'
import conveyor_bridge from './conveyor_bridge'
import dev_solid_pump from './dev_solid_pump'
import conveyor_germ_sensor from './conveyor_germ_sensor'
import conveyor_temperature_sensor from './conveyor_temperature_sensor'
import conveyor_element_sensor from './conveyor_element_sensor'
import conveyor_shutoff from './conveyor_shutoff'
import conveyor_meter from './conveyor_meter'

const transport: BuildCategory = {
    id: 'transport',
    name: '运输',
    icon: '⇄',
    buildings: [
        sweeper,
        auto_miner,
        rocket_port_solid_unloader,
        rocket_port_solid_loader,
        conveyor_chute,
        conveyor_rail,
        conveyor_receptacle,
        conveyor_loader,
        solid_filter,
        conveyor_bridge,
        dev_solid_pump,
        conveyor_germ_sensor,
        conveyor_temperature_sensor,
        conveyor_element_sensor,
        conveyor_shutoff,
        conveyor_meter,
    ],
}

export default transport
