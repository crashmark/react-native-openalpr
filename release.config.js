module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/git',
    [
      '@semantic-release/gitlab',
      {
        gitlabUrl: 'https://gitlab.com',
        repositoryUrl:
          'https://gitlab.com/park-smart/mobile/react-native-openalpr'
      }
    ]
  ],
  branches: [
    { name: 'master' }, // `channel` is undefined so the default distribution channel will be used
    // { name: 'dev', channel: 'channel-dev', prerelease: true } // `channel` is built with the template `channel-${name}`
  ]
}
