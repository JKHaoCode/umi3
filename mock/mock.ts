import Mock from 'mockjs';

const Random = Mock.Random

// @ts-ignore
Random.extend({
  planInfo: function() {
    const Info = ["吃饭", "睡觉", "打豆豆", "洗澡"];
    return this.pick(Info)
  }
})

// const data = Mock.mock('/fakeData', 'get', {
//   success: true,
//   message: 'success',
//   todoList: {
//     "filter": "SHOW_ALL",
//     "list|1-10": [
//       {
//         "id|+1": 1,
//         "content": '@planInfo',
//         "isDone": Random.boolean(),
//         "dataTime": Random.date('yyyy-MM-dd')
//       },
//     ]
//   },
// })
 // umi的mock数据
export default {
  'GET /fakeData': Mock.mock({
    success: true,
    message: 'success',
    todoList: {
      "filter": "SHOW_ALL",
      "list|1-10": [
        {
          "id|+1": 1,
          "content": '@planInfo',
          "isDone": Random.boolean(),
          "dataTime": Random.date('yyyy-MM-dd')
        },
      ]
    },
  })
};
