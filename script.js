window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function createPromises() {
let randomTime = Math.random()*4000;
let randomPromise = new Promise((resolve,reject)=>{
	setTimeout(resolve(randomTime),randomTime);
});
	for (let index = 0; index < 5; index++) {
	 promises.push(randomPromise);
		
	}
}
createPromises();
Promise.any(promises).then(ele=>{
	document.getElementById('output').innerHTML = ele;
})

