const ButtonTypes = ['default', 'primary', 'warning', 'danger', 'text'] as const 
export type ButtonType = typeof ButtonTypes[number]

const SizeTypes=["small","medium","large"]
export type ButtonSize= typeof SizeTypes[number]