const INITIAL_COUNT = 0

const count = createCounter(INITIAL_COUNT);

const view = creatView({
	onIncrementButtonClick:handleIncrementButtonClick,
	onDicrementButtonClick:handleDicrementButtonClick,
	onResetButtonClick:handleResetButtonClick
})


 view.render({
	count:count.get()
})

function handleIncrementButtonClick () {
	count.increment()
	view.render({
		count:count.get()
	})
}

function handleDicrementButtonClick () {
	count.dicrement()
	view.render({
		count:count.get()
	})

}

function handleResetButtonClick () {
	count.reset()
	view.render({
		count:count.get()
	})

}
