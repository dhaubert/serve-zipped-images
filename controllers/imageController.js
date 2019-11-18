const https = require("https");
const fs = require("fs");
const rimraf = require("rimraf");

class ImageController {
  constructor() {
    this.tempFolder = "./bucket";
    this.imagePrefix = "photo_";
  }

  async fetchURL(imageURL, name) {
    const file = fs.createWriteStream(`${this.tempFolder}/${name}.png`);
    https.get(imageURL, response => response.pipe(file));
  }

  async fetchAll(images) {
    for (let i = 0; i < images.length; i++) {
      const imageURL = images[i];
      this.fetchURL(imageURL, `${this.imagePrefix}${i}`);
    }
  }

  clearTempFolder() {
    return rimraf(`${this.tempFolder}/*.png`, () =>
      console.log("Temporary directory cleaned.")
    );
  }
}

module.exports = new ImageController();
