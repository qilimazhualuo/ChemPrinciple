import type { BuildCategory } from '../types'
import gas_cargo_tank from './gas_cargo_tank'
import bio_cargo_tank from './bio_cargo_tank'
import liquid_cargo_tank from './liquid_cargo_tank'
import cargo_tank from './cargo_tank'
import liquid_hydrogen_engine from './liquid_hydrogen_engine'
import solid_booster from './solid_booster'
import steam_engine from './steam_engine'
import biofuel_engine from './biofuel_engine'
import petroleum_engine from './petroleum_engine'
import interplanetary_launcher from './interplanetary_launcher'
import conveyor_load_attachment from './conveyor_load_attachment'
import conveyor_receptacle_attachment from './conveyor_receptacle_attachment'
import liquid_output_attachment from './liquid_output_attachment'
import gas_output_attachment from './gas_output_attachment'
import cargo_unpacker from './cargo_unpacker'
import liquid_input_attachment from './liquid_input_attachment'
import gas_input_attachment from './gas_input_attachment'
import power_plug_attachment from './power_plug_attachment'
import meteor_blaster from './meteor_blaster'
import tourist_module from './tourist_module'
import research_module from './research_module'
import command_module from './command_module'
import beacon from './beacon'
import robot_control_station from './robot_control_station'
import rocket_control_station from './rocket_control_station'
import starmap_sensor from './starmap_sensor'
import command_capsule from './command_capsule'
import rocket_port_extender from './rocket_port_extender'
import ladder_attachment from './ladder_attachment'
import launch_pad from './launch_pad'
import liquid_fuel_tank from './liquid_fuel_tank'
import liquid_oxidizer_tank from './liquid_oxidizer_tank'
import solid_oxidizer_tank from './solid_oxidizer_tank'
import telescope_rocket from './telescope_rocket'
import telescope_insulated from './telescope_insulated'

const rocket: BuildCategory = {
    id: 'rocket',
    name: '火箭',
    icon: '▲',
    buildings: [
        gas_cargo_tank,
        bio_cargo_tank,
        liquid_cargo_tank,
        cargo_tank,
        liquid_hydrogen_engine,
        solid_booster,
        steam_engine,
        biofuel_engine,
        petroleum_engine,
        interplanetary_launcher,
        conveyor_load_attachment,
        conveyor_receptacle_attachment,
        liquid_output_attachment,
        gas_output_attachment,
        cargo_unpacker,
        liquid_input_attachment,
        gas_input_attachment,
        power_plug_attachment,
        meteor_blaster,
        tourist_module,
        research_module,
        command_module,
        beacon,
        robot_control_station,
        rocket_control_station,
        starmap_sensor,
        command_capsule,
        rocket_port_extender,
        ladder_attachment,
        launch_pad,
        liquid_fuel_tank,
        liquid_oxidizer_tank,
        solid_oxidizer_tank,
        telescope_rocket,
        telescope_insulated,
    ],
}

export default rocket
