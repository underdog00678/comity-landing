"use server";

export type EarlyAccessState = {
  success: boolean;
  error?: string;
};

const normalizeEmail = (email: string) => email.trim().toLowerCase();

export async function saveEarlyAccess(
  _prevState: EarlyAccessState,
  formData: FormData
): Promise<EarlyAccessState> {
  const rawEmail = formData.get("email");

  if (typeof rawEmail !== "string") {
    return { success: false, error: "Please enter a valid email." };
  }

  const email = normalizeEmail(rawEmail);

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email." };
  }

  const webhookUrl = process.env.EARLY_ACCESS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("EARLY_ACCESS_WEBHOOK_URL is not set");
    return {
      success: false,
      error: "Server not configured. Please try again later.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        email,
        createdAt: new Date().toISOString(),
      }),
    });

    // Apps Script typically returns 200 even for “ok:false” responses,
    // but we’ll still handle non-200.
    const text = await res.text().catch(() => "");

    if (!res.ok) {
      console.error("Early access webhook failed", res.status, text);
      return { success: false, error: "Something went wrong. Please try again." };
    }

    // If your Apps Script returns JSON like { ok: true, deduped: true }
    // we can mirror your old “already on the list” behavior.
    try {
      const json = JSON.parse(text);
      if (json?.deduped) {
        return { success: false, error: "That email is already on the list." };
      }
      if (json?.ok === false) {
        return { success: false, error: "Please enter a valid email." };
      }
    } catch {
      // If it returned plain text "ok", that's fine too.
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to submit early access entry", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
