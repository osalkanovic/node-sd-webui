export interface ProgressResponse {
  progress: number
  eta_relative: number
  state: {
    skipped: boolean
    interrupted: boolean
    job: string
    job_count: number
    job_timestamp: string
    job_no: number
    sampling_step: number
    sampling_steps: number
  }
  current_image: string
  textinfo: string
}

export const progress = async (
  apiUrl: string = 'http://localhost:7860'
): Promise<ProgressResponse> => {
  let endpoint = '/sdapi/v1/progress'

  /* @ts-ignore */
  const result = await fetch(`${apiUrl}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (result.status !== 200) {
    throw new Error(result.statusText)
  }

  const data: any = await result.json()

  return data as ProgressResponse
}
