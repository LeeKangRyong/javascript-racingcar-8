import { Input } from "../views/index.js";

const Race = {  
    async run() {
        const query = await Input.readQuery();
    }
}

export { Race };