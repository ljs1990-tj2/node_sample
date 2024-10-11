// promise (pending, fulfilled(success), rejected(fail))

var promise = new Promise((resolve, reject)=>{
    var flg = false;
    setTimeout(()=>{
        if(flg){
            resolve("통신 성공!!");
        } else {
            reject("통신 실패!!");
        }
    }, 1000);
});

promise
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })