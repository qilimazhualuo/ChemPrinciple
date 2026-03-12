import type { BuildCategory } from '../types'
import gas_range from './gas_range'
import spice_grinder from './spice_grinder'
import deep_fryer from './deep_fryer'
import water_cooler from './water_cooler'
import microbe_musher from './microbe_musher'
import electric_grill from './electric_grill'
import gourmet_producer from './gourmet_producer'
import smoke_room from './smoke_room'
import hydroponic_farm from './hydroponic_farm'
import planter_box from './planter_box'
import farm_tile from './farm_tile'
import creature_drink_feeder from './creature_drink_feeder'
import creature_feeder from './creature_feeder'
import fly_trap from './fly_trap'
import incubator from './incubator'
import creature_delivery_point from './creature_delivery_point'
import fly_trap_apartment from './fly_trap_apartment'
import creature_release_point from './creature_release_point'
import fish_feeder from './fish_feeder'
import fish_feeder_2 from './fish_feeder_2'
import creature_trap from './creature_trap'
import fish_release_point from './fish_release_point'
import egg_cracker from './egg_cracker'
import creature_apartment from './creature_apartment'
import fish_trap from './fish_trap'
import ration_box from './ration_box'
import refrigerator from './refrigerator'

const food: BuildCategory = {
    id: 'food',
    name: '食物',
    icon: '☗',
    buildings: [
        gas_range,
        spice_grinder,
        deep_fryer,
        water_cooler,
        microbe_musher,
        electric_grill,
        gourmet_producer,
        smoke_room,
        hydroponic_farm,
        planter_box,
        farm_tile,
        creature_drink_feeder,
        creature_feeder,
        fly_trap,
        incubator,
        creature_delivery_point,
        fly_trap_apartment,
        creature_release_point,
        fish_feeder,
        fish_feeder_2,
        creature_trap,
        fish_release_point,
        egg_cracker,
        creature_apartment,
        fish_trap,
        ration_box,
        refrigerator,
    ],
}

export default food
