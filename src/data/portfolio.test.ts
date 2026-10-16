import { strict as assert } from "node:assert";
import { test } from "node:test";
import { experience } from "./portfolio";

test("SehgalMotors employment uses the supplied duration without invented details", () => {
  const job = experience.find((entry) => entry.company === "SehgalMotors.pk");
  assert.equal(job?.period, "May 2025 – August 2026");
  assert.equal(job?.location, undefined);
  assert.equal(job?.highlight, undefined);
});