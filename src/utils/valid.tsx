import moment from 'moment'
export function validPhone(_, value) {}
export function validStartAndEndTime(rules: any, value: any, e) {
//   const { values } = rules
//   console.log(value, '--values', rules)
//   const startTime = moment(values.edu_time[0]).valueOf()
//   const endTime = moment(values.edu_time[1]).valueOf()
//   if (endTime < startTime) {
//     return Promise.reject(new Error('开始时间不能大于于结束时间'))
//   }
  return Promise.resolve()
}
