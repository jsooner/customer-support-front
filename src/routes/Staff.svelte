<script>
	import getCookie from "../utils/getCookie";

	let url;
	let title;
	let body;
	let to_email;
	let subjectID;
	let staffID;
	let token;

	title = "";
	body = "";
	to_email = "";
	subjectID = "";
	token = getCookie("auth")
	//check for existing token (Does not check for valid one)
	if (token == "" || token == null)
		window.location.href = "/login"

	const handleSubmit = ()=>
	{
		let payload;
		let url;

		url = "http://localhost:8000/response/list/";
		payload = {};
		payload.title = title;
		payload.body = body;
		payload.to_email = to_email;
		payload.subjectID = subjectID;
		payload.staffID = staffID;

		fetch(url, {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
				'Authorization' : `Token ${token}`
			},
			body : JSON.stringify(payload)
		})
		.then(response => {
			console.log(response)
			if (response.status == 401)
			{
				alert("Not authorized")
				return window.location.href = "/login"
			}
			if(!response.ok)
				alert("Bad input")
			else
				alert("response submitted successfully!")
			title = "";
			body = "";
			to_email = "";
			subjectID = "";
		})
		.catch((e)=>console.log("error: " + e))
	}
	
</script>

<style>
	/* your styles go here */
</style>

<div>
	<h2>Staff dashboard</h2>
	<div>[list of open subjects here...]</div>
	<h3>New response</h3>
	<div style="display:flex;flex-direction:column">
		<input bind:value= {title} type="text" placeholder="Title">
		<textarea bind:value= {body} type="text" placeholder="body"></textarea>
		<input bind:value= {to_email} type="email" placeholder="Email of customer">
		<input bind:value= {subjectID} type="text" placeholder="subjectID">
		<input bind:value= {staffID} type="text" placeholder="staffID">
	</div>
	<div>
		<button on:click={handleSubmit}>Submit response</button>
	</div>
	<p>*Autofill staffID and subjectID yet to be implemented</p>
	<p>*Validation to be implemented</p>
</div>