import type { BuildCategory } from '../types'
import hand_sanitizer from './hand_sanitizer'
import wash_sink from './wash_sink'
import wash_basin from './wash_basin'
import decontamination_shower from './decontamination_shower'
import triage_cot from './triage_cot'
import dev_life_support from './dev_life_support'
import disease_clinic from './disease_clinic'
import doctor_station from './doctor_station'
import apothecary from './apothecary'
import massage_table from './massage_table'
import oil_well_cap from './oil_well_cap'
import monument from './monument'

const medical: BuildCategory = {
    id: 'medical',
    name: '医疗',
    desc: '',
    icon: '✚',
    buildings: [
        hand_sanitizer,
        wash_sink,
        wash_basin,
        decontamination_shower,
        triage_cot,
        dev_life_support,
        disease_clinic,
        doctor_station,
        apothecary,
        massage_table,
        oil_well_cap,
        monument,
    ],
}

export default medical
