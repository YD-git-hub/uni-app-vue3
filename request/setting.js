export const baseUrl ='https://carbon.ttdhealth.com';
// export const baseUrl ='http://192.168.2.93';

export const get = (url,data)=>{
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:"加载中"
		})
		uni.request({
			url:baseUrl+url,
			data:data,
			method:'GET',
			header:{
				'Content-Type':'application/json'
			},
			success: (res) => {
				uni.hideLoading();
				resolve(res.data);
			},
			fail: (err) => {
				uni.hideLoading();
				reject(err)
			}
		})
	})
}

export const post = (url,data)=>{
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:"加载中"
		})
		uni.request({
			url:baseUrl+url,
			data:data,
			method:'POST',
			header:{
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				uni.hideLoading();
				resolve(res.data);
			},
			fail: (err) => {
				uni.hideLoading();
				reject(err)
			}
		})
	})
	
}

export const Uploadpost=(url, file)=> {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title:"上传中"
		})
		uni.uploadFile({
			url: baseUrl + url, //仅为示例，非真实的接口地址
			filePath: file.url,
			name: 'file',
			formData: {},
			success: (res) => {
				uni.hideLoading();
				resolve(JSON.parse(res.data));
			},
			fail: (err) => {
				uni.showToast({
					title: '上传失败',
					icon: 'none'
				})
				reject(err)
			}
		})
	});
}