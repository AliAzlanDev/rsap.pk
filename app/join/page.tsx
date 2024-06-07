import { Suspense } from "react";

export default function Join() {
  return (
    <div className="container-x">
      <h1>Join RSAP</h1>
      <h1>Under construction</h1>
      <Suspense fallback={<div>Loading…</div>}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfKtiCXOGflGEZF_S8szCwpJNDXzqAMeOQvhc5qLAtb6gBGqg/viewform?embedded=true"
          width="640"
          height="800"
          className="mx-auto w-full"
        >
          Loading…
        </iframe>
      </Suspense>
    </div>
  );
}
