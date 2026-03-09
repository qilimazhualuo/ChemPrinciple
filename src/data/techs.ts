/**
 * 缺氧科技树 - 按 https://oxygennotincluded.wiki.gg/zh/wiki/技术#科技树
 * 成本取基础+高级研究点数（简化）
 */
export interface TechNode {
    id: string
    name: string
    cost: number
    prerequisites: string[]
    tier: number
}

export const techs: TechNode[] = [
    // 虚拟起点（游戏开始时已解锁）
    { id: 'start', name: '起步', cost: 0, prerequisites: [], tier: 0 },
    // ========== 食物 ==========
    { id: 'basic_farming', name: '基础耕种', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'meal_preparation', name: '食物制备', cost: 20, prerequisites: ['basic_farming'], tier: 2 },
    { id: 'agriculture', name: '农业', cost: 50, prerequisites: ['meal_preparation'], tier: 3 },
    { id: 'ranching', name: '养殖', cost: 50, prerequisites: ['meal_preparation'], tier: 3 },
    { id: 'food_repurposing', name: '食物再利用', cost: 65, prerequisites: ['agriculture'], tier: 4 },
    { id: 'animal_control', name: '动物控制', cost: 65, prerequisites: ['ranching'], tier: 4 },
    { id: 'creature_comforts', name: '生物舒适', cost: 90, prerequisites: ['animal_control'], tier: 5 },
    { id: 'gourmet_meal_preparation', name: '美食制备', cost: 90, prerequisites: ['animal_control'], tier: 5 },
    { id: 'brackene_flow', name: '咸乳供应', cost: 120, prerequisites: ['creature_comforts', 'valve_miniaturization'], tier: 6 },

    // ========== 电力 ==========
    { id: 'power_regulation', name: '电力调节', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'internal_combustion', name: '内燃机', cost: 20, prerequisites: ['power_regulation'], tier: 2 },
    { id: 'fossil_fuels', name: '化石燃料', cost: 50, prerequisites: ['internal_combustion'], tier: 3 },
    { id: 'sound_amplifiers', name: '扩音器', cost: 50, prerequisites: ['internal_combustion'], tier: 3 },
    { id: 'advanced_power_regulation', name: '高级电力调节', cost: 50, prerequisites: ['internal_combustion'], tier: 3 },
    { id: 'plastic_manufacturing', name: '塑料制造', cost: 65, prerequisites: ['fossil_fuels'], tier: 4 },
    { id: 'low_resistance_conductors', name: '低阻导体', cost: 65, prerequisites: ['sound_amplifiers', 'advanced_power_regulation'], tier: 4 },
    { id: 'valve_miniaturization', name: '泵小型化', cost: 90, prerequisites: ['plastic_manufacturing'], tier: 5 },
    { id: 'renewable_energy', name: '可再生能源', cost: 90, prerequisites: ['low_resistance_conductors'], tier: 5 },

    // ========== 固体材料 ==========
    { id: 'employment', name: '职业管理', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'brute_force_refinement', name: '蛮力精炼', cost: 20, prerequisites: ['employment'], tier: 2 },
    { id: 'refined_renovations', name: '精致翻修', cost: 50, prerequisites: ['brute_force_refinement'], tier: 3 },
    { id: 'smart_storage', name: '智能存储', cost: 50, prerequisites: ['brute_force_refinement'], tier: 3 },
    { id: 'smelting', name: '熔炼', cost: 65, prerequisites: ['refined_renovations'], tier: 4 },
    { id: 'solid_transport', name: '固体运输', cost: 65, prerequisites: ['smart_storage'], tier: 4 },
    { id: 'superheated_forging', name: '超热锻造', cost: 90, prerequisites: ['smelting'], tier: 5 },
    { id: 'solid_control', name: '固体控制', cost: 90, prerequisites: ['solid_transport'], tier: 5 },
    { id: 'solid_management', name: '固体管理', cost: 120, prerequisites: ['solid_control'], tier: 6 },

    // ========== 殖民地发展 ==========
    { id: 'advanced_research', name: '高级研究', cost: 20, prerequisites: ['employment'], tier: 2 },
    { id: 'artificial_friends', name: '人工伙伴', cost: 50, prerequisites: ['brute_force_refinement', 'advanced_research'], tier: 3 },
    { id: 'robotic_tools', name: '机器人工具', cost: 65, prerequisites: ['artificial_friends'], tier: 4 },
    { id: 'notification_systems', name: '通知系统', cost: 50, prerequisites: ['robotic_tools'], tier: 4 },

    // ========== 医疗 ==========
    { id: 'pharmacology', name: '药物学', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'medical_equipment', name: '医疗设备', cost: 20, prerequisites: ['pharmacology'], tier: 2 },
    { id: 'pathogen_diagnostics', name: '病原体诊断', cost: 50, prerequisites: ['advanced_research', 'medical_equipment'], tier: 3 },
    { id: 'micro_targeted_medicine', name: '靶向药物', cost: 65, prerequisites: ['pathogen_diagnostics'], tier: 4 },

    // ========== 液体 ==========
    { id: 'plumbing', name: '水管', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'air_systems', name: '空气系统', cost: 20, prerequisites: ['plumbing'], tier: 2 },
    { id: 'sanitation', name: '卫生设备', cost: 20, prerequisites: ['plumbing'], tier: 2 },
    { id: 'filtration', name: '分离', cost: 20, prerequisites: ['plumbing'], tier: 2 },
    { id: 'liquid_based_refinement', name: '基于液体的精炼工艺', cost: 50, prerequisites: ['air_systems'], tier: 3 },
    { id: 'flow_redirection', name: '流动重导', cost: 50, prerequisites: ['sanitation'], tier: 3 },
    { id: 'distillation', name: '精馏', cost: 50, prerequisites: ['filtration'], tier: 3 },
    { id: 'improved_plumbing', name: '改良水管', cost: 50, prerequisites: ['filtration'], tier: 3 },
    { id: 'emulsification', name: '乳化', cost: 65, prerequisites: ['distillation'], tier: 4 },
    { id: 'liquid_tuning', name: '液体微调', cost: 65, prerequisites: ['improved_plumbing'], tier: 4 },
    { id: 'advanced_caffeination', name: '高级咖啡', cost: 90, prerequisites: ['liquid_tuning'], tier: 5 },

    // ========== 气体 ==========
    { id: 'ventilation', name: '通风', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'pressure_management', name: '气压管理', cost: 20, prerequisites: ['ventilation'], tier: 2 },
    { id: 'portable_gases', name: '便携气体', cost: 20, prerequisites: ['ventilation'], tier: 2 },
    { id: 'temperature_modulation', name: '温度调节', cost: 50, prerequisites: ['pressure_management'], tier: 3 },
    { id: 'improved_ventilation', name: '改良通风', cost: 50, prerequisites: ['pressure_management'], tier: 3 },
    { id: 'advanced_gas_flow', name: '高级气体流动', cost: 50, prerequisites: ['pressure_management'], tier: 3 },
    { id: 'hvac', name: '暖通空调', cost: 65, prerequisites: ['temperature_modulation'], tier: 4 },
    { id: 'decontamination', name: '除污', cost: 50, prerequisites: ['improved_ventilation'], tier: 4 },
    { id: 'gas_distribution', name: '气体分配', cost: 65, prerequisites: ['improved_ventilation'], tier: 4 },
    { id: 'catalytics', name: '催化剂', cost: 90, prerequisites: ['hvac'], tier: 5 },

    // ========== 防护服 ==========
    { id: 'hazard_protection', name: '危险防护', cost: 65, prerequisites: ['improved_ventilation', 'textile_production'], tier: 4 },
    { id: 'transit_tubes', name: '运载管道', cost: 90, prerequisites: ['hazard_protection'], tier: 5 },
    { id: 'personal_flight', name: '个人飞行', cost: 120, prerequisites: ['transit_tubes'], tier: 6 },

    // ========== 装饰 ==========
    { id: 'interior_decor', name: '室内装潢', cost: 15, prerequisites: ['start'], tier: 1 },
    { id: 'artistic_expression', name: '艺术表达', cost: 20, prerequisites: ['interior_decor'], tier: 2 },
    { id: 'textile_production', name: '纺织生产', cost: 50, prerequisites: ['artistic_expression'], tier: 3 },
    { id: 'fine_art', name: '艺术', cost: 50, prerequisites: ['artistic_expression'], tier: 3 },
    { id: 'home_luxuries', name: '豪华家装', cost: 65, prerequisites: ['textile_production'], tier: 4 },
    { id: 'high_culture', name: '高雅文化', cost: 65, prerequisites: ['fine_art'], tier: 4 },
    { id: 'glass_blowing', name: '玻璃吹制', cost: 90, prerequisites: ['home_luxuries'], tier: 5 },
    { id: 'renaissance_art', name: '复兴艺术', cost: 90, prerequisites: ['high_culture'], tier: 5 },
    { id: 'environmental_appreciation', name: '环境鉴赏', cost: 120, prerequisites: ['glass_blowing'], tier: 6 },
    { id: 'new_media', name: '新媒体', cost: 120, prerequisites: ['glass_blowing'], tier: 6 },
    { id: 'monuments', name: '丰碑', cost: 170, prerequisites: ['environmental_appreciation', 'new_media'], tier: 7 },

    // ========== 计算机 ==========
    { id: 'smart_home', name: '智能家居', cost: 20, prerequisites: ['interior_decor'], tier: 2 },
    { id: 'generic_sensors', name: '通用传感器', cost: 50, prerequisites: ['smart_home'], tier: 3 },
    { id: 'advanced_automation', name: '高级自动化', cost: 65, prerequisites: ['generic_sensors'], tier: 4 },
    { id: 'parallel_automation', name: '并行自动化', cost: 65, prerequisites: ['generic_sensors'], tier: 4 },
    { id: 'computing', name: '信息处理', cost: 90, prerequisites: ['advanced_automation'], tier: 5 },
    { id: 'multiplexing', name: '多路传输', cost: 120, prerequisites: ['computing'], tier: 6 },
    { id: 'celestial_detection', name: '天体探测', cost: 120, prerequisites: ['computing'], tier: 6 },

    // ========== 火箭 ==========
    { id: 'introductory_rocketry', name: '火箭入门', cost: 170, prerequisites: ['celestial_detection'], tier: 7 },
    { id: 'solid_fuel_combustion', name: '固体燃料燃烧', cost: 370, prerequisites: ['introductory_rocketry'], tier: 8 },
    { id: 'hydrocarbon_combustion', name: '烃类燃料燃烧', cost: 570, prerequisites: ['introductory_rocketry'], tier: 8 },
    { id: 'solid_cargo', name: '固体货舱', cost: 370, prerequisites: ['introductory_rocketry'], tier: 8 },
    { id: 'liquid_gas_cargo', name: '液气货舱', cost: 570, prerequisites: ['solid_cargo'], tier: 9 },
    { id: 'unique_cargo', name: '特殊货舱', cost: 970, prerequisites: ['liquid_gas_cargo'], tier: 10 },
]
