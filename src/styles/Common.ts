import { theme } from "./Theme"

type FontPropsType = {
  weight?: number
  color?: string
  Fmin?: number
  Fmax?: number
}

export const font = ({weight, color, Fmin, Fmax}: FontPropsType) => `
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`