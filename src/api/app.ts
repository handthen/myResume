import http from '@/http'

export async function getResume(params = {}) {
  return http({
    method: 'get',
    url: '/resumn/getResumn',
    params,
  })
}

export async function saveResume(data = {}, customConfig = {}) {
  return http({
    method: 'get',
    url: '/resumn/saveResume',
    data,
    customConfig,
  })
}
