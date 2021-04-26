import fs from "fs";
import { getMetadataFilePath, postDirectoriesPath } from "../constants";

function getMetadata(postDirectory) {
  const metadataFilePath = getMetadataFilePath(postDirectory);
  try {
    const textMetadata = fs.readFileSync(metadataFilePath, "utf8");
    const metadata = JSON.parse(textMetadata);

    return {
      ...metadata,
      link: postDirectory,
    };
  } catch (e) {
    console.log("getMetadata failded", e);
    return {};
  }
}

export async function getPosts() {
  const util = require("util");
  const readdir = util.promisify(fs.readdir);
  const postDirectories = await readdir(postDirectoriesPath);
  const metadatas = postDirectories.map(getMetadata);
  return metadatas;
}
