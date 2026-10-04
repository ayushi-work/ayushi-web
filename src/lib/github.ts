export async function getGithubStats(username: string) {
  if (!username || username === "lorem") return null;
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) return null;
  const u = await res.json();
  return {
    followers: u.followers,
    repos: u.public_repos,
    avatar: u.avatar_url,
  };
}
