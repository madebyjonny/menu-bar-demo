import { menubar } from "menubar";
import * as path from "path";

const mb = menubar({
  index: `file://${__dirname}/dist/index.html`,
  icon: path.join(process.cwd(), "assets", "icon-dark.png"),
});

mb.on("ready", () => {
  console.log("app is ready");
});
