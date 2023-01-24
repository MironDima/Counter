
function createCounter (initialCounter)  {
	return {
		count: initialCounter,
		get: function() {
			return this.count
		},
		increment: function () {    //увеличение
			this.count++
		},
		dicrement: function () {    //уммньшение
			this.count--
		},

		reset:  function()  {     		//перезагрузка
			this.count=initialCounter		
		}
		
	}
}





