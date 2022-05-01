module.exports = ({ wallets, refs, config, client }) => ({
  getBirthday: () => client.query("clicker", { get_birthday: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),

  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});