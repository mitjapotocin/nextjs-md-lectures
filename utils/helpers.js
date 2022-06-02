
export default function isAllowedPaths(slug) {
    return !(slug.includes('.DS_Store') || slug.includes('.md'));
}
  