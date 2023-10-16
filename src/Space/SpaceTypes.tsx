const alignTypes = ['start','end','center','baseline'] as const
export type alignType = typeof alignTypes[number]