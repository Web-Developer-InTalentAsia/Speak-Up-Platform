import { APP_NAME } from '@speak-up/shared';

export default function ReporterHome() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white sm:px-10 lg:px-20">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 font-bold text-slate-950">
            S
          </span>
          <span className="font-semibold">{APP_NAME}</span>
        </div>
        <span className="text-sm text-slate-400">Private · Secure · Heard</span>
      </nav>
      <section className="mx-auto grid max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            A safer way to speak up
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Your voice can help make things better.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Share a concern, ask for support, or report something that does not
            feel right. You choose what to share and when.
          </p>
          <button
            disabled
            aria-describedby="report-status"
            className="mt-10 cursor-not-allowed rounded-full bg-emerald-400 px-7 py-4 font-semibold text-slate-950 opacity-70"
          >
            Start a report <span aria-hidden>→</span>
          </button>
          <p id="report-status" className="mt-3 text-sm text-slate-300">
            Reporting is coming soon. No information is collected here.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-950/20 sm:p-10">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">
              Before you begin
            </span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
              2 minutes
            </span>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-800 text-emerald-300">
                1
              </span>
              <div>
                <h2 className="font-medium">Tell us what happened</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Use your own words. You can remain anonymous.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-800 text-emerald-300">
                2
              </span>
              <div>
                <h2 className="font-medium">Review and submit</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  You are in control before anything is shared.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
            Need help? Contact your trusted support person.
          </div>
        </div>
      </section>
      <footer className="mx-auto max-w-6xl border-t border-white/10 pt-6 text-sm text-slate-500">
        You are welcome here. Your safety matters.
      </footer>
    </main>
  );
}
