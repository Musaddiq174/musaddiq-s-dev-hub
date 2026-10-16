import { strict as assert } from "node:assert";
import { test } from "node:test";
import { experience, skillGroups } from "./portfolio";

const seoSkills = [
  "SEO Content Writing",
  "Keyword Research",
  "On-Page SEO",
  "Product Description Writing",
  "Content Optimization",
  "Meta Title & Description Optimization",
  "Shopify",
  "Website Content Management",
];

test("SehgalMotors employment uses the supplied duration without invented details", () => {
  const job = experience.find((entry) => entry.company === "SehgalMotors.pk");
  assert.equal(job?.period, "May 2025 – August 2026");
  assert.equal(job?.location, undefined);
  assert.equal(job?.highlight, undefined);
  assert.equal(
    "skills" in (job ?? {}),
    false,
    "experience card must not carry skill pills",
  );
});

test("SEO & Content Creation is the last toolkit card and lists all 8 supplied skills", () => {
  const group = skillGroups.at(-1);
  assert.ok(group, "toolkit must not be empty");
  assert.equal(group.title, "SEO & Content Creation");
  assert.deepEqual(group.items, seoSkills);
});
