import type { BuildCategory } from '../types'
import artifact_analysis_station from './artifact_analysis_station'
import oxygen_mask_station from './oxygen_mask_station'
import suit_marker from './suit_marker'
import suit_locker from './suit_locker'
import lead_suit_station from './lead_suit_station'
import lead_suit_locker from './lead_suit_locker'
import jet_suit_station from './jet_suit_station'
import jet_suit_locker from './jet_suit_locker'
import oxygen_mask_locker from './oxygen_mask_locker'
import farm_station from './farm_station'
import plant_analyzer from './plant_analyzer'
import power_control_station from './power_control_station'
import skill_scrubber from './skill_scrubber'
import crafting_station from './crafting_station'
import welding_station from './welding_station'
import fashion_station from './fashion_station'
import suit_forge from './suit_forge'
import loom from './loom'
import explosive_station from './explosive_station'
import logic_control_station from './logic_control_station'
import logic_control_station_2 from './logic_control_station_2'
import ranch_station from './ranch_station'
import grooming_station from './grooming_station'
import shearing_station from './shearing_station'
import research_center from './research_center'
import telescope from './telescope'
import virtual_planetarium from './virtual_planetarium'
import material_study_terminal from './material_study_terminal'
import orbital_data_collection from './orbital_data_collection'
import data_mining from './data_mining'
import super_computer from './super_computer'
import telescope_2 from './telescope_2'

const station: BuildCategory = {
    id: 'station',
    name: '站台',
    desc: '',
    icon: '▣',
    buildings: [
        artifact_analysis_station,
        oxygen_mask_station,
        suit_marker,
        suit_locker,
        lead_suit_station,
        lead_suit_locker,
        jet_suit_station,
        jet_suit_locker,
        oxygen_mask_locker,
        farm_station,
        plant_analyzer,
        power_control_station,
        skill_scrubber,
        crafting_station,
        welding_station,
        fashion_station,
        suit_forge,
        loom,
        explosive_station,
        logic_control_station,
        logic_control_station_2,
        ranch_station,
        grooming_station,
        shearing_station,
        research_center,
        telescope,
        virtual_planetarium,
        material_study_terminal,
        orbital_data_collection,
        data_mining,
        super_computer,
        telescope_2,
    ],
}

export default station
