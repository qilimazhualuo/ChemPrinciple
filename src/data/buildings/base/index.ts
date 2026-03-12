import type { BuildCategory } from '../types'
import wicker_door from './wicker_door'
import manual_airlock from './manual_airlock'
import mechanical_airlock from './mechanical_airlock'
import bunker_door from './bunker_door'
import pneumatic_door from './pneumatic_door'
import insulated_door from './insulated_door'
import ladder from './ladder'
import fire_pole from './fire_pole'
import plastic_ladder from './plastic_ladder'
import minipod from './minipod'
import storage_bin from './storage_bin'
import gas_reservoir from './gas_reservoir'
import smart_storage_bin from './smart_storage_bin'
import auto_dispenser from './auto_dispenser'
import liquid_reservoir from './liquid_reservoir'
import airflow_tile from './airflow_tile'
import insulated_tile from './insulated_tile'
import bunker_tile from './bunker_tile'
import snow_tile from './snow_tile'
import drywall from './drywall'
import storage_tile from './storage_tile'
import mesh_tile from './mesh_tile'
import wood_tile from './wood_tile'
import tile from './tile'
import window_tile from './window_tile'
import metal_tile from './metal_tile'
import carpet_tile from './carpet_tile'
import plastic_tile from './plastic_tile'
import transit_tube_entrance from './transit_tube_entrance'
import transit_tube_connector from './transit_tube_connector'
import transit_tube from './transit_tube'

const base: BuildCategory = {
    id: 'base',
    name: '基地',
    icon: '◉',
    buildings: [
        wicker_door,
        manual_airlock,
        mechanical_airlock,
        bunker_door,
        pneumatic_door,
        insulated_door,
        ladder,
        fire_pole,
        plastic_ladder,
        minipod,
        storage_bin,
        gas_reservoir,
        smart_storage_bin,
        auto_dispenser,
        liquid_reservoir,
        airflow_tile,
        insulated_tile,
        bunker_tile,
        snow_tile,
        drywall,
        storage_tile,
        mesh_tile,
        wood_tile,
        tile,
        window_tile,
        metal_tile,
        carpet_tile,
        plastic_tile,
        transit_tube_entrance,
        transit_tube_connector,
        transit_tube,
    ],
}

export default base
