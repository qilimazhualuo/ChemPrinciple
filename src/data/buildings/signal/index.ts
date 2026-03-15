import type { BuildCategory } from '../types'
import logic_hammer from './logic_hammer'
import logic_memory from './logic_memory'
import logic_not from './logic_not'
import logic_selector from './logic_selector'
import logic_or from './logic_or'
import logic_buffer from './logic_buffer'
import logic_splitter from './logic_splitter'
import logic_xor from './logic_xor'
import logic_filter from './logic_filter'
import logic_and from './logic_and'
import duplicant_sensor from './duplicant_sensor'
import logic_counter from './logic_counter'
import logic_alarm from './logic_alarm'
import pressure_sensor from './pressure_sensor'
import radiation_sensor from './radiation_sensor'
import cycle_sensor from './cycle_sensor'
import gas_element_sensor from './gas_element_sensor'
import hydro_sensor from './hydro_sensor'
import timer_sensor from './timer_sensor'
import light_sensor from './light_sensor'
import particle_sensor from './particle_sensor'
import creature_sensor from './creature_sensor'
import thermo_sensor from './thermo_sensor'
import power_sensor from './power_sensor'
import motion_sensor from './motion_sensor'
import liquid_element_sensor from './liquid_element_sensor'
import space_scanner from './space_scanner'
import germ_sensor from './germ_sensor'
import pressure_plate from './pressure_plate'
import switch_signal from './switch_signal'
import signal_receiver from './signal_receiver'
import signal_broadcaster from './signal_broadcaster'
import wire_set_writer from './wire_set_writer'
import logic_ribbon from './logic_ribbon'
import wire_set_reader from './wire_set_reader'
import logic_wire from './logic_wire'
import logic_ribbon_bridge from './logic_ribbon_bridge'
import logic_wire_bridge from './logic_wire_bridge'

const signal: BuildCategory = {
    id: 'signal',
    name: '信号',
    desc: '',
    icon: '◐',
    buildings: [
        logic_hammer,
        logic_memory,
        logic_not,
        logic_selector,
        logic_or,
        logic_buffer,
        logic_splitter,
        logic_xor,
        logic_filter,
        logic_and,
        duplicant_sensor,
        logic_counter,
        logic_alarm,
        pressure_sensor,
        radiation_sensor,
        cycle_sensor,
        gas_element_sensor,
        hydro_sensor,
        timer_sensor,
        light_sensor,
        particle_sensor,
        creature_sensor,
        thermo_sensor,
        power_sensor,
        motion_sensor,
        liquid_element_sensor,
        space_scanner,
        germ_sensor,
        pressure_plate,
        switch_signal,
        signal_receiver,
        signal_broadcaster,
        wire_set_writer,
        logic_ribbon,
        wire_set_reader,
        logic_wire,
        logic_ribbon_bridge,
        logic_wire_bridge,
    ],
}

export default signal
