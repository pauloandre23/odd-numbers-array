function solution(A) {
    let m = new Map()
    for(let x = 0; x < A.length; x++) {
      m.has(A[x]) ? m.set(A[x], m.get(A[x]) + 1) : m.set(A[x], 1)
        
    }
   for(p of m) {
    if(p[1] === 1)
      console.log(p[0])
     }
  }
  
  solution([1,2,1,3,2,3,2,4,5,5,1])