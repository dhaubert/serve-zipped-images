const { zip } = require("zip-a-folder");

class zipController {
  constructor() {
    this.outputFilename = "./output/mission_01.zip";
  }

  async zipFolder(originPath) {
    await zip(originPath, `${this.outputFilename}`, err => {
      if (err)
        console.log("An error happened while zipping image folder: ", err);
    });
    return this.outputFilename;
  }

}

module.exports = new zipController();
