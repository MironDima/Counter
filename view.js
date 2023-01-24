function creatView({
	onIncrementButtonClick,
	onDicrementButtonClick,
	onResetButtonClick
}) {
	const couterValue = document.querySelector('.js-count ')
	const incrementBtn = document.querySelector('.btn-increment ')
	const dicrementBtn = document.querySelector('.btn-dicrement')
	const resetBtn = document.querySelector('.btn-reset')

	incrementBtn.addEventListener('click' , () =>{
		onIncrementButtonClick()

	})

	dicrementBtn.addEventListener('click' , () =>{
		onDicrementButtonClick()		
	})	
	
	resetBtn.addEventListener('click' , () =>{
		onResetButtonClick()		
	})	


	return {
		render({count}) {
			couterValue.innerHTML=count
		}
	}
}



