const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')

function updateGraph()
{
	const graph = document.getElementById('graph')
	const nbVotesElement = document.getElementById('nb_votes')
	if (!graph)
	{
		return
	}

	const formData = new FormData(form)

	let style = formData.get('style')
	let tour = formData.get('tour')

	if (!['scores', 'votes'].includes(style))
	{
		style = 'scores'
	}

	if (!['1', '2', '3', '4', '5', '6', '7'].includes(tour))
	{
		tour = '1'
	}

	fetch(`data/2023/df_${style}_${tour}.json`)
		.then(response => response.json())
		.then(data =>
			{
				const length = Object.values(data['vote']).length
				const graphData = []

				let nbVotes = 0

				if ('color' in data)
				{
					const colors = [...new Set(Object.values(data['color']))]
					colors.forEach(color =>
						{
							const x = []
							const y = []

							for (let i = 0; i < length; ++i)
							{
								if (data['color'][i] !== color)
								{
									continue
								}

								x.push(data['vote'][i])
								y.push(data['score'][i])

								nbVotes += data['score'][i]
							}

							graphData.push({
								name: `Choix ${color}`,
								type: 'bar',
								x: x,
								y: y,
							})
						})
				}
				else
				{
					const votes = [
						'Abbé Pierre',
						'AIDES',
						'HelpSimus',
						'L214',
						'Noé',
						'SurfRider',
						'Wings Of The Ocean',
					]
					votes.forEach(vote =>
						{
							const x = []
							const y = []

							for (let i = 0; i < length; ++i)
							{
								if (data['vote'][i] !== vote)
								{
									continue
								}

								x.push(vote)
								y.push(data['score'][i])

								nbVotes += data['score'][i]
							}

							graphData.push({
								name: vote,
								type: 'bar',
								x: x,
								y: y,
							})
						})
				}

				nbVotesElement.innerText = nbVotes

				Plotly.newPlot(graph, graphData,
					{
						barmode: 'stack',
						showlegend: true,
						margin: { t: 0, },
					})
			})
}

form.addEventListener('submit', event =>
	{
		event.preventDefault()
		updateGraph()
	})

inputs.forEach(input =>
	input.addEventListener('change', _ =>
		updateGraph()))

document.addEventListener('DOMContentLoaded', () =>
	{
		updateGraph()
	})

window.addEventListener('resize', () =>
	{
		updateGraph()
	})
