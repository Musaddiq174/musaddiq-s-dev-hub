import { expect, test } from "bun:test";
import { experience } from "./portfolio";

test("SehgalMotors employment uses the supplied duration without invented details", () => {
  const job = experience.find((entry) => entry.company === "SehgalMotors.pk");
  expect(job?.period).toBe("May 2025 – August 2026");
  expect(job?.location).toBeUndefined();
  expect(job?.highlight).toBeUndefined();
});