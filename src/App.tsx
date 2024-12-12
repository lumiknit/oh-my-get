import { invoke } from "@tauri-apps/api/core";
import { Component } from "solid-js";
import toast, { Toaster } from "solid-toast";

const App: Component = () => {
	let refInput: HTMLInputElement = null!;
	let refResult: HTMLPreElement = null!;

	const send = async () => {
		try {
			const result = await invoke("fetch_get", { url: refInput.value });
			console.log(result);
			refResult.textContent = result as string;
		} catch (e) {
			console.error(e);
			toast.error(e.message);
		}
	};

	return (
		<>
			<Toaster />
			<main class="container">
				<input
					ref={refInput}
					type="text"
					placeholder="URL"
					class="input input-bordered w-full max-w-xs"
				/>

				<button class="btn" onClick={send}>
					Greet
				</button>

				<pre ref={refResult!} />
			</main>
		</>
	);
};

export default App;
