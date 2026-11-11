export default function AdminSignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-xl font-bold text-emerald-300">
            S
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-slate-500">
            Sign in to the administrator portal
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div
            role="group"
            aria-label="Administrator sign-in preview"
            className="space-y-5"
          >
            <label className="block text-sm font-medium text-slate-700">
              Work email
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>
            <button
              type="button"
              disabled
              className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Sign in
            </button>
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Authentication is not connected yet. This is a UI placeholder for
            the initial foundation.
          </p>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Speak Up Platform · Administrator access
        </p>
      </div>
    </main>
  );
}
