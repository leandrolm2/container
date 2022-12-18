export enum status {
    full = 'ST_FULL',
    empty = 'ST_EMPTY'
}

export enum category {
    importation = 'CA_IMPORT',
    exportation = 'CA_EXPORT'
}

export const ContainerType = [20,40] as const

export type containerType = typeof ContainerType[number];