import http from '@/http';

export async function getResume() {
  return http({
    method: 'get',
  });
}
