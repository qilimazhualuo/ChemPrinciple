import type { BuildCategory } from '../types'
import diamond_press from './diamond_press'
import oxidizer from './oxidizer'
import emulsifier from './emulsifier'
import molecular_forge from './molecular_forge'
import bleach_stone_hopper from './bleach_stone_hopper'
import desalinator from './desalinator'
import metal_refinery from './metal_refinery'
import kiln from './kiln'
import glass_forge from './glass_forge'
import water_sieve from './water_sieve'
import lumber from './lumber'
import rock_crusher from './rock_crusher'
import oil_refinery from './oil_refinery'
import polymer_press from './polymer_press'
import grinder from './grinder'
import algae_distillery from './algae_distillery'
import fertilizer_synthesizer from './fertilizer_synthesizer'
import sludge_press from './sludge_press'
import compost from './compost'
import ethanol_distillery from './ethanol_distillery'
import sludge_separator from './sludge_separator'

const refine: BuildCategory = {
    id: 'refine',
    name: '精炼',
    desc: '',
    icon: '◇',
    buildings: [
        diamond_press,
        oxidizer,
        emulsifier,
        molecular_forge,
        bleach_stone_hopper,
        desalinator,
        metal_refinery,
        kiln,
        glass_forge,
        water_sieve,
        lumber,
        rock_crusher,
        oil_refinery,
        polymer_press,
        grinder,
        algae_distillery,
        fertilizer_synthesizer,
        sludge_press,
        compost,
        ethanol_distillery,
        sludge_separator,
    ],
}

export default refine
