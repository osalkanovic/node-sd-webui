import { Preprocessor, ResizeMode, ControlMode } from '../../types'

export type ControlNetOptions = {
  inputImageData?: string
  mask?: string
  preprocessor?: Preprocessor
  model?: string
  weight?: number
  resizeMode?: ResizeMode
  lowvram?: boolean
  thresholdA?: number
  thresholdB?: number
  guidance?: number
  guidanceStart?: number
  guidanceEnd?: number
  guessMode?: boolean
  controlMode?: ControlMode
  pixelPerfect?: boolean
}

export const mapControlNetOptions = (options: ControlNetOptions) => {
  let body: any = {
    module: options.preprocessor || Preprocessor.None,
    model: options.model || 'None',
    weight: options.weight || 1,
    guidance_start: options.guidanceStart || 0,
    guidance_end: options.guidanceEnd || 1,
    resize_mode: options.resizeMode || ResizeMode.ScaleToFit,
    guess_mode: options.guessMode || false,
    lowvram: options.lowvram || false,
    control_mode: options.controlMode || ControlMode.Balanced,
    pixel_perfect: options.pixelPerfect,
  }

  if (options.inputImageData) {
    body.input_image = options.inputImageData
  }

  if (options.mask) {
    body.mask = options.mask
  }

  return body
}
