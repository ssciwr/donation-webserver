import { test, expect, type APIRequestContext } from "@playwright/test";

const BASE_URL = process.env.SMOKE_BASE_URL;
const TARGET_EMAIL = process.env.SMOKE_EMAIL ?? "smoke@example.test";
const MAILHOG_URL = process.env.SMOKE_MAILHOG_URL;

const UUID_PATTERN =
  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

test.describe("donation smoke", () => {
  test.skip(!BASE_URL, "SMOKE_BASE_URL not set; export it to run smoke tests");

  test("POST /donation?/donate records row, returns UUID, sends confirmation email", async ({
    request,
  }) => {
    const form = new URLSearchParams({
      gender: "1",
      age: "2",
      lang: "1",
      email: TARGET_EMAIL,
      country: "DE",
    });

    const res = await request.post(`${BASE_URL}/donation?/donate`, {
      headers: {
        "x-sveltekit-action": "true",
        "content-type": "application/x-www-form-urlencoded",
      },
      data: form.toString(),
      maxRedirects: 0,
    });

    const status = res.status();
    const responseText = await res.text();
    expect(status, `unexpected status ${status}; body: ${responseText}`).toBe(
      200,
    );

    const uuidMatch = responseText.match(UUID_PATTERN);
    expect(
      uuidMatch,
      `response did not contain a UUID; body: ${responseText}`,
    ).not.toBeNull();
    const uuid = uuidMatch![0];
    expect(responseText).not.toMatch(
      /"message":"(invalid_|server_error|db_error|send_failed)"/,
    );

    if (MAILHOG_URL) {
      const inboxUuid = await pollMailhogForUuid(
        request,
        MAILHOG_URL,
        TARGET_EMAIL,
      );
      expect(inboxUuid).toBe(uuid);
    }
  });

  test("rejects malformed email with 400 invalid_email", async ({
    request,
  }) => {
    const form = new URLSearchParams({
      gender: "1",
      age: "2",
      lang: "1",
      email: "not-an-email",
      country: "DE",
    });

    const res = await request.post(`${BASE_URL}/donation?/donate`, {
      headers: {
        "x-sveltekit-action": "true",
        "content-type": "application/x-www-form-urlencoded",
      },
      data: form.toString(),
      maxRedirects: 0,
    });

    expect(res.status()).toBe(400);
    expect(await res.text()).toMatch(/invalid_email/);
  });
});

async function pollMailhogForUuid(
  request: APIRequestContext,
  mailhogUrl: string,
  recipient: string,
): Promise<string> {
  const deadline = Date.now() + 20_000;
  let lastError: string | undefined;
  while (Date.now() < deadline) {
    const res = await request.get(
      `${mailhogUrl}/api/v2/search?kind=to&query=${encodeURIComponent(recipient)}`,
    );
    if (res.ok()) {
      const body = (await res.json()) as {
        items?: Array<{ Content?: { Body?: string } }>;
      };
      for (const item of body.items ?? []) {
        const match = (item.Content?.Body ?? "").match(UUID_PATTERN);
        if (match) return match[0];
      }
    } else {
      lastError = `${res.status()} ${res.statusText()}`;
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(
    `No email containing a UUID found for ${recipient} within 20s${lastError ? ` (last Mailhog error: ${lastError})` : ""}`,
  );
}
