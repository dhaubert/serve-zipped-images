const imageController = require("../imageController");
const zipController = require("../zipController");

class downloadController {
  constructor() {
    this.resourcesFile = "../../assets/res/anexo_01.json";
  }

  async index(req, res) {
    const imageCollection = require(this.resourcesFile);

    console.log(
      `Downloading and zipping ${imageCollection.images.length} images...`
    );

    await imageController.fetchAll(imageCollection.images);
    const outputFilename = await zipController.zipFolder(imageController.tempFolder);

    console.log(`Making ${outputFilename} available.`);
    res.download(outputFilename);
    console.log(`Cleaning ${imageCollection.images.length} images...`);
    imageController.clearTempFolder();
  }
}

module.exports = downloadController;
