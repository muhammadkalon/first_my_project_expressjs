import fs from "fs";


export const read_file = (file_name) => {
    return JSON.parse(fs.readFileSync(`./data/${file_name}`), "utf-8");
}

export const write_file = (file_name, data) => {
  return  fs.writeFileSync(`./data/${file_name}`, JSON.stringify(data, null, 2));
}

