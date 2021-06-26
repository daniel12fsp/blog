export const rootDirectoryPath = process.cwd();
export const postDirectoriesPath = `${rootDirectoryPath}/pages/posts`;
export const getMetadataFilePath = (postDirectoryPath) =>
  `${postDirectoriesPath}/${postDirectoryPath}/metadata.json`;
export const getLink = (postDirectory) => `posts/${postDirectory}`;
export const getDarkCssPath = `${rootDirectoryPath}/assets/dark.min.css`;