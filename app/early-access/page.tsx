"use client";

import { useFormState } from "react-dom";

import {
  saveEarlyAccess,
  type EarlyAccessState,
} from "../actions/saveEarlyAccess";

export default function EarlyAccessPage() {
  const [state, formAction] = useFormState<EarlyAccessState, FormData>(
    saveEarlyAccess,
    { success: false }
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
        <a href="/" className="text-sm font-semibold text-slate-600">
          ← Back to Commitly
        </a>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-semibold text-slate-900">
            Join Early Access
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Leave your details and we will send your early access link. We&apos;ll
            email you your early access link.
          </p>

          {state.success ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-sm text-emerald-800">
              Thanks — you&apos;re on the list.
            </div>
          ) : (
            <form className="mt-8 grid gap-5" action={formAction}>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                  name="name"
                  placeholder="Jane Doe"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                  name="email"
                  type="email"
                  placeholder="jane@studio.com"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                What do you want Commitly to help with?
                <textarea
                  className="min-h-[120px] rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                  name="help"
                  placeholder="Tell us about your workflow or goals."
                />
              </label>

              {state.error ? (
                <p className="text-xs text-rose-600">{state.error}</p>
              ) : null}

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Save my spot
              </button>
              <p className="text-xs text-slate-500">
                We&apos;ll email you your early access link.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
