import { client } from "init/client";
import { BaseMenu } from "kasumi.js";
import upath from "upath";
import * as fs from "fs";
import "./event";

class HiyoriMenu extends BaseMenu {
    name = "hiyori";
}

const menu = new HiyoriMenu();
export default menu;
client.plugin.load(menu);
client.plugin.addAlias(menu, "hyr", "hi", "h");

import WordleMenu from "@saltcute/kasumi-wordle";
import EssentialMenu from "@saltcute/kasumi-essential";
import ApexMenu from "@saltcute/kasumi-apex";

menu.load(new EssentialMenu());
menu.load(new WordleMenu());
menu.load(new ApexMenu());

try {
    const basicPath = upath.join(__dirname, "command");
    const commands = fs.readdirSync(basicPath);
    for (const command of commands) {
        try {
            require(upath.join(basicPath, command));
        } catch (e) {
            menu.logger.error("Error loading command");
            menu.logger.error(e);
        }
    }
} catch (e) {}
