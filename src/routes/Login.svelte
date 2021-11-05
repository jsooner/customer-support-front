<script>
	import setCookie from "../utils/setCookie"

	let username;
	let password;

	username = "";
	password = "";

	//login handler
	const handleLogin = () =>
	{
		let payload;
		let url;

		payload = {}
		payload.username = username;
		payload.password = password;
		url = "http://localhost:8000/response/token/login";
		fetch(url, {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body : JSON.stringify(payload)
		})
		.then(response => response.json())
		.then((data) => {
			if (!data.auth_token)
				return alert("Bad credentials")
			setCookie("auth", data.auth_token)
			window.location.href = "/staff";
		})
		.catch((e)=>console.log("error: " , e))
	}
</script>

<div>
	<h2>Staff login</h2>
	<input bind:value= {username} type="text" placeholder="Username">
	<input bind:value= {password} type="password" placeholder="Password">
	<button on:click={handleLogin}>Log in</button>
</div>