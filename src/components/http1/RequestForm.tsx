import { Component, For } from "solid-js";
import { h1Methods } from "../../lib/http1";

type Props = {

};

const RequestForm: Component<Props> = () => {
	return <div class="p-2">

		{/* Method */}
		<label class="form-control w-full max-w-xs">
		<div class="label">
				<span class="label-text">Method</span>
			</div>
		<select class="select select-bordered w-full max-w-xs">
			<option disabled selected>Method</option>
			<For each={h1Methods}>{m =>
				<option>{m}</option>}</For>
		</select>
		</label>

		{/* URL */}
		<label class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text">URL</span>
			</div>
			<input type="text" placeholder="www" class="input input-bordered w-full max-w-xs" />
			</label>

		{/* Body */}
		<label class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text">Body</span>
			</div>
			<textarea placeholder="Type here" class="textarea textarea-bordered w-full max-w-xs"></textarea>
			</label>

		{/* Submit */}


	</div>;
};

export default RequestForm;
