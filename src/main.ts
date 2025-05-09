import { Page } from "./rlib/timeline/t2025/april/Portfolio/simplyAwesome";
import "./style.css";
const port = new Page();
document.querySelector<HTMLDivElement>("#app")!.appendChild(port.getElement());
