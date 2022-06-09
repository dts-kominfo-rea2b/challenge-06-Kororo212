// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
    const fileList = [file1, file2, file3]
    let result = [];

    fileList.forEach(item => {
        const processItem = new Promise((resolve, reject) => {
            fs.readFile(item, (error, data) => {
                // error state
                if (error) {
                    reject(error)
                    return
                }
                // success state
                const proses = processData(data)
                resolve(proses);
            })
        })
        result.push(processItem);
    })
    Promise.all(result).then(values => {
        fnCallback(null, values)
    }).catch(error => {
        fnCallback(error, null)
    });

}
const processData = (data) => {
    const dataa = JSON.parse(data);
    let x = [];
    if (dataa.message !== undefined) {
        x = dataa.message;

    }
    if (dataa.length) {
        dataa.forEach(item => {

            if (item.message !== undefined) {
                x = item.message;
            } else {
                x = item.data.message;
            }
        })

    }
    return getWord(x);
}
const getWord = (words) => {
    const split = words.split(" ");
    if (split.length >= 1) {
        return split[1];
    }
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
