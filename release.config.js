module.exports = {
  branches: ['master', 'next'],
  repositoryUrl: 'https://github.com/sixfootsixdesigns/React-Library-Boilerplate',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist',
      },
    ],
  ],
};