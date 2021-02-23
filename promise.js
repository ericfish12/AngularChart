// const foo = {h:'ji'}

// const myObj = {
//     1:2,
//        myMethod(item) {
//             console.log(this);

//             const resolve = function() {
//                 console.log(this);
//             }.bind(this)

//             const bar = () => {
//                 console.log(this);
//             }

//             resolve();
//             bar();
//         }

//     };
//     myObj.myMethod([1]);








// class MyPromise {
//     state = 'pending';
//   currentData;

//   constructor(executor) {
//     this.then = this.then.bind(this);
//     this.resolve = this.resolve.bind(this);
//     executor(this.resolve, this.reject);
//   }

//   resolve(data) {
//       this.state = 'OK'
//     this.currentData = data;
//   }
//   reject(error) {}

//    then(thencallbackfun) {
   
//       console.log(this.state)
//   if(this.state=="OK")
// return thencallbackfun(this.currentData);
    
//       else
// setTimeout(()=>{
//     this.then(thencallbackfun)

// },0)
  
  


//   }
//   catch() {}
// }



// // promise.all

// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise", 1);
//     resolve("hello");
//   }, 3 * 1000);
// })
//   .then((data) => {
//     console.log(data, 2);
//     return new MyPromise((res, rej) => {
//         // setTimeout(() => {
//       res("Dio");
//     // }, 3 * 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data, 3);
//   });

// console.log(p)





class MyPromise {
    thenCallBackQueue = [];
    currentData;
    promisestate = 'pending';

    constructor(executor) {
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(data) {
        setTimeout(() => {
           
            // this.promisestate = 'fulfilled';
            if (!this.thenCallBackQueue.length) return;
            this.currentData = data;
            while (this.thenCallBackQueue.length) {
                const cb = this.thenCallBackQueue.shift();

                if (this.currentData instanceof MyPromise) {
                    this.currentData.then(dataFromRes => {
                        this.currentData = cb(dataFromRes);
                    });
                } else {
                 //   console.log("here.......",this.currentData)
                    this.currentData = cb(this.currentData)||this.currentData;
                }
            } 
        }, 0);
    }
    reject(error) {
        this.promisestate = 'rejected';
    }
    then(thencallbackfun) {
      //  console.log(this.currentData,22222)
    //   if(thencallbackfun)
        this.thenCallBackQueue.push(thencallbackfun);
        return this;
    }
    catch() { }

    // promise.all

    static all(array) {
        let counter = 0;
        const resolveData = new Array(array.length); // 

        return new MyPromise((res, rej) => {
            array.forEach((ele, i) => {
                if (ele instanceof MyPromise) {
                    ele.then(data => {
                        counter++;
                        resolveData[i] = data;
                        if (counter === array.length)
                            res(resolveData);
                    }).catch(err => rej(err));
                } else {
                    counter++;
                    resolveData[i] = ele;
                    if (counter === array.length)
                        res(resolveData);
                }
            });
        });
    }



    // Promise.resolve
    static resolve(resdata) {
        return new MyPromise((resolve, _) => {
            resolve(resdata)
        });
    }
    // Promise.reject
    static reject(rejdata) {
        return new MyPromise((_, reject) => {
            reject(rejdata);
        });
    }






}










const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise", 1);
    resolve("hello");
  }, 3 * 1000);
})
  .then((data) => {
    console.log(data, 2);
    // return new MyPromise((res, rej) => {
    //     setTimeout(() => {
    //   res("Dio");
    // }, 3 * 1000);
    // });
//   })
//   .then((data) => {
//     // setTimeout(() => {
//     console.log(data, 3);
// // }, 3 * 1000);
  });

console.log(p,"ppppppp")



 
 



//     const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// // console.log(promise3.then(data => console.log(4)));

// MyPromise.all([
//     promise1, 
//     promise2,
//     promise3
// ]).then().then()
// .then((values) => {
//     console.log(values);
// });







    // const getAllTodos = () =>
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json());

    //         getAllTodos();