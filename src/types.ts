export enum SamplingMethod {
  Euler_A = 'Euler a',
  Euler = 'Euler',
  LMS = 'LMS',
  Heun = 'Heun',
  DPM2 = 'DPM2',
  DPM2_A = 'DPM2 a',
  DPMPlusPlus_S2_A = 'DPM++ S2 a',
  DPMPlusPlus_2M = 'DPM++ 2M',
  DPMPlusPlus_SDE = 'DPM++ SDE',
  DPM_Fast = 'DPM fast',
  DPM_Adaptive = 'DPM adaptive',
  LMS_Karras = 'LMS Karras',
  DPM2_Karras = 'DPM2 Karras',
  DPM2_A_Karras = 'DPM2 a Karras',
  DPMPlusPlus_2S_A_Karras = 'DPM++ 2S a Karras',
  DPMPlusPlus_2M_Karras = 'DPM++ 2M Karras',
  DPMPlusPlus_SDE_Karras = 'DPM++ SDE Karras',
  DDIM = 'DDIM',
  PLMS = 'PLMS',
}

export enum ResizeMode {
  Envelope = 'Envelope (Outer Fit)',
  ScaleToFit = 'Scale to Fit (Inner Fit)',
  JustResize = 'Just Resize',
}

export enum ControlMode {
  Balanced = 'Balanced',
  PromptMoreImportant = 'My prompt is more important',
  ControlNetImportant = 'ControlNet is more important',
}

export enum Preprocessor {
  None = 'none',
  Canny = 'canny',
  Depth = 'depth',
  Depth_LeRes = 'depth_leres',
  HED = 'hed',
  MLSD = 'mlsd',
  NormalMap = 'normal_map',
  OpenPose = 'openpose',
  Pidinet = 'pidinet',
  Scribble = 'scribble',
  Fake_Scribble = 'fake_scribble',
  Segmentation = 'segmentation',
}
