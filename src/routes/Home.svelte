<script>
	let title;
	let slug;
	let body;
	let url;
	let attatchment;
	let email;

	title = '';
	slug = '';
	body = '';
	email = '';
	attatchment = [];
	const handleSubmit = ()=>{
		let payload;

		payload = new FormData();
		payload.append("title", title);
		payload.append("slug", slug)
		payload.append("body", body);
		payload.append("email", email);
		payload.append("attatchment", attatchment[0]);
		payload.append("active", true)

		
		url = "http://localhost:8000/subject/"

		fetch(url, {
		method: 'POST',
		body: payload,
		})
		.then(response => response.json())
		.then(data => {
			if (!data.error)
			{
				console.log('Success:', data);
				alert("Success, your feedback is recorded")
			}
			else
			{
				alert(JSON.stringify(data.error))
				console.error('Error:', data.error);
			}
		})
		.catch((error) => {
		console.error('Error:', error);
		});
	}
</script>

<main>
		<div>
			<label>Title </label>
			<input bind:value={title}>
			
			<label>Slug </label>
			<input bind:value={slug}>

			<label>Email </label>
			<input type = "email" bind:value={email}>
			
			<label>Body </label>
			<textarea bind:value={body}></textarea>
	
			<label>attatchment </label>
			<input type="file" bind:files = {attatchment}>
		</div>
	
		<button on:click={() => handleSubmit()}>submit</button>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>