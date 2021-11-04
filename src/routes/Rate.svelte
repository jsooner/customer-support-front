<script>
	export let id;

	let subject_data;
	let url;
	let rating;

	//geting data from backend
	url = `http://localhost:8000/subject/${id}/`
	subject_data = null;
	fetch(url)
	.then(response => response.json())
	.then(data => subject_data = data)
	.catch(e=>console.error("error:", e))

	//rate handlers
	rating = 5;
	const handleSubmit = () =>
	{
		let payload;

		payload = new FormData();
		payload.append("rating", rating);

		fetch(url, {method : "PUT", body : payload})
		.then(response => response.json())
		.then((data)=>{
			console.log(data)
			if (!data.error)
			{
				alert('your data is recorded')
			}
			else
			{
				console.error("error:", e)
			}
		})
		.catch(e=>console.error("error:", e))
	}
</script>

<div>
	{#if subject_data}
		<div>Subject ID : {subject_data.id}</div>
		<div>Feedback for : {subject_data.title}</div>
		<div>Status : {subject_data.active ? "Active" : "Inactive"}</div>
		<label>
			Rating:
			<input type=number bind:value={rating} min=1 max=5>
			<input type=range bind:value={rating} min=1 max=5>
		</label>
		<button on:click={()=> handleSubmit()}>Submit rating</button>
	{:else}
		Loading..
	{/if}
</div>