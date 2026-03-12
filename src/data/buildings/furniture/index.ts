import type { BuildCategory } from '../types'
import bed from './bed'
import ladder_bed from './ladder_bed'
import luxury_bed from './luxury_bed'
import monument_top from './monument_top'
import sculpture from './sculpture'
import display_shelf from './display_shelf'
import wood_sculpture from './wood_sculpture'
import wall_planter from './wall_planter'
import ceiling_planter from './ceiling_planter'
import pedestal from './pedestal'
import park_sign from './park_sign'
import metal_sculpture from './metal_sculpture'
import canvas from './canvas'
import monument_middle from './monument_middle'
import planter_box_decor from './planter_box_decor'
import ceiling_light from './ceiling_light'
import marble_sculpture from './marble_sculpture'
import monument_bottom from './monument_bottom'
import canvas_wide from './canvas_wide'
import canvas_blank from './canvas_blank'
import aero_pot from './aero_pot'
import pixel_pack from './pixel_pack'
import sculpture_wide from './sculpture_wide'
import corner_moulding from './corner_moulding'
import ice_sculpture from './ice_sculpture'
import small_table from './small_table'
import mess_table from './mess_table'
import dev_light from './dev_light'
import ceiling_light_2 from './ceiling_light_2'
import sun_lamp from './sun_lamp'
import ceiling_light_3 from './ceiling_light_3'
import ceiling_light_4 from './ceiling_light_4'
import water_cooler_2 from './water_cooler_2'
import arcade_cabinet from './arcade_cabinet'
import mechanical_surfboard from './mechanical_surfboard'
import arcade_cabinet_2 from './arcade_cabinet_2'
import vertical_wind_tunnel from './vertical_wind_tunnel'
import hot_tub from './hot_tub'
import beach_chair from './beach_chair'
import sauna from './sauna'
import juicer from './juicer'
import espresso_machine from './espresso_machine'
import soda_fountain from './soda_fountain'
import jukebot from './jukebot'

const furniture: BuildCategory = {
    id: 'furniture',
    name: '家具',
    icon: '▦',
    buildings: [
        bed,
        ladder_bed,
        luxury_bed,
        monument_top,
        sculpture,
        display_shelf,
        wood_sculpture,
        wall_planter,
        ceiling_planter,
        pedestal,
        park_sign,
        metal_sculpture,
        canvas,
        monument_middle,
        planter_box_decor,
        ceiling_light,
        marble_sculpture,
        monument_bottom,
        canvas_wide,
        canvas_blank,
        aero_pot,
        pixel_pack,
        sculpture_wide,
        corner_moulding,
        ice_sculpture,
        small_table,
        mess_table,
        dev_light,
        ceiling_light_2,
        sun_lamp,
        ceiling_light_3,
        ceiling_light_4,
        water_cooler_2,
        arcade_cabinet,
        mechanical_surfboard,
        arcade_cabinet_2,
        vertical_wind_tunnel,
        hot_tub,
        beach_chair,
        sauna,
        juicer,
        espresso_machine,
        soda_fountain,
        jukebot,
    ],
}

export default furniture
