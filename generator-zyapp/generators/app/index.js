var Generator = require("yeoman-generator");

// const fs = require("fs");
// var path = require('path');

/* 

initializing - Your initialization methods (checking current project state, getting configs, etc)
prompting - Where you prompt users for options (where you’d call this.prompt())
configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
default - If the method name doesn’t match a priority, it will be pushed to this group.
writing - Where you write the generator specific files (routes, controllers, etc)
conflicts - Where conflicts are handled (used internally)
install - Where installations are run (npm, bower)
end - Called last, cleanup, say good bye, etc

*/
module.exports = class extends (
  Generator
) {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    // this.option("babel"); // This method adds support for a `--babel` flag

    // this.helperMethod = function () {
    //   console.log("won't be called automatically");
    // };

    this.argument("appname", {
      type: String,
      required: true,
      desc: "project name",
    });

    this.project_path = void 0; // 项目根目录

    this.log(this.options.appname);
  }

  async prompting() {
    this.answer = await this.prompt([
      {
        type: "input",
        name: "type",
        message: "Your project type 'pc' or 'h5'",
      },
    ]);

    // this.log(this.answer);
  }

  configuring() {
    console.log(this.sourceRoot());
    // import config
    this.project_path = this.destinationPath(this.options.appname);
    this.destinationRoot(this.project_path);

    this.copyTemplate(
      `${this.sourceRoot()}/package.json`,
      `${this.project_path}/package.json`
    );
    this.copyTemplate(
      `${this.sourceRoot()}/yarn.lock`,
      `${this.project_path}/yarn.lock`
    );

    this.fs.extendJSON(`${this.project_path}/package.json`, {
      name: this.options.appname,
      version: "1.0.0",
    });
  }

  writing() {
    if (this.answer.type === "h5") {
      this.copyTemplate(
        this.templatePath("public/h5/"),
        `${this.project_path}/public`
      );
    } else if (this.answer.type === "pc") {
      this.copyTemplate(
        this.templatePath("public/pc/"),
        `${this.project_path}/public`
      );
    }
    this.copyTemplate(this.templatePath("src"), `${this.project_path}/src`);
    this.copyTemplate(
      this.templatePath(".gitignore"),
      `${this.project_path}/.gitignore`
    );
    this.copyTemplate(
      this.templatePath("README.md"),
      `${this.project_path}/README.md`
    );
  }

  //   install() {
  //     this.yarnInstall();
  //   }

  welcome() {
    this.log("welcome to Yeoman!!!");
    // console.log(this.argument())
  }
};
