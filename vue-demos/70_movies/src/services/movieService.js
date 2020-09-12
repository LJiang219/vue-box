// export default{
//   getMovies(page, pageSize) {
//     const arr = await fetch("https://api.myjson.com/bins/15f8x1")
//     .then(resp => resp.json());
//     return {
//       total: arr.length,
//       datas: arr.splice((page - 1) * paseSize, page * pageSize)
//     }
//   }
// }

import movies from "../mockDatas.js";

function getAllMovies(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies)

    }, 2000)
  })
}

export default{
  
  async getPageMovies(page, pageSize){
    const arr = await getAllMovies();
    return {
      total: arr.length,
      datas: arr.slice((page - 1) * pageSize, page * pageSize)
      //不是splice
    }
  }
}
  




// import axios from "axios";

// export default{
//   getMovies(){
//     return axios.get("https://api.myjson.com/bins/15f8x1").then(res => res.data)
//   }
// }