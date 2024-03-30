async function sleep(millis) {
    return new Promise((res,rej) => {
      try {
        setTimeout(() => res(5), millis)
      } catch(err) {
        rej(err)
      }
    })
  }


  async function sleep(milliseconds) {
	await new Promise(res => setTimeout(res, milliseconds)); 
}