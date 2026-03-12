import type { BuildCategory } from '../types'
import battery from './battery'
import smart_battery from './smart_battery'
import battery_medium from './battery_medium'
import power_plug from './power_plug'
import disconnect from './disconnect'
import disconnect_high from './disconnect_high'
import steam_turbine from './steam_turbine'
import petroleum_generator from './petroleum_generator'
import coal_generator from './coal_generator'
import solar_panel from './solar_panel'
import manual_generator from './manual_generator'
import dev_generator from './dev_generator'
import natural_gas_generator from './natural_gas_generator'
import hydrogen_generator from './hydrogen_generator'
import wood_gas_generator from './wood_gas_generator'
import peat_generator from './peat_generator'
import transformer_large from './transformer_large'
import transformer from './transformer'
import toggler from './toggler'
import power_switch from './power_switch'
import wire_high_wattage from './wire_high_wattage'
import wire_high_wattage_bridge from './wire_high_wattage_bridge'
import wire from './wire'
import wire_bridge from './wire_bridge'
import wire_high_wattage_2 from './wire_high_wattage_2'
import wire_high_wattage_bridge_2 from './wire_high_wattage_bridge_2'
import wire_refined from './wire_refined'
import wire_refined_bridge from './wire_refined_bridge'

const power: BuildCategory = {
    id: 'power',
    name: '电力',
    icon: '⚡',
    buildings: [
        battery,
        smart_battery,
        battery_medium,
        power_plug,
        disconnect,
        disconnect_high,
        steam_turbine,
        petroleum_generator,
        coal_generator,
        solar_panel,
        manual_generator,
        dev_generator,
        natural_gas_generator,
        hydrogen_generator,
        wood_gas_generator,
        peat_generator,
        transformer_large,
        transformer,
        toggler,
        power_switch,
        wire_high_wattage,
        wire_high_wattage_bridge,
        wire,
        wire_bridge,
        wire_high_wattage_2,
        wire_high_wattage_bridge_2,
        wire_refined,
        wire_refined_bridge,
    ],
}

export default power
