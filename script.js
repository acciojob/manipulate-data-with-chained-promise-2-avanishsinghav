//your JS code here. If required.
function manipulateArray(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})
	.then((arr)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let filteredArr = arr.filter(num => num % 2===0);
				document.getElementById("output").innerText = filteredArr.join(",");
				resolve(filteredArr);
			},1000)
		})
	})
	.then((filteredArr)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let MultiplyArr = arr.map(num => num*2);
				document.getElementById("output").innerText = MultiplyArr.join(",");
				resolve(MultiplyArr);
			},2000)
		})
	})
}
manipulateArray();