import { writeFileSync } from "node:fs";
export default function saveAs(path, data) {
  writeFileSync(path, JSON.stringify(data));
}
