import { expect, test } from "../fixtures";

const recommendationsEndpoint= "/api/v2/purl/recommend";

test("Recommendations - Empty PURL list", async ({ axios }) => {
  await expect(
    axios.post(recommendationsEndpoint, { params: { purls: [] } })
  ).rejects.toMatchObject({
    response: { status: 400 },
  });
});
