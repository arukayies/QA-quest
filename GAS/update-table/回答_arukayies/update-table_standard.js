/*
概要
 引数で渡された連想配列を元に、スプレッドシートの表を更新する関数(標準仕様)
 https://github.com/teamQA-github/QA-quest/tree/main/GAS/update-table

引数
 pu_data 更新するデータ

戻り値
 なし
———————————–*/
function updateTabele_standard(pu_data) {
    // シートの中身を2次元配列に入れる
    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
    let tables = sheet.getRange("A1:D7").getValues();

    // 1行目をキーとしてコピーし、配列からは１行目は削除する
    const keys = tables.shift();

    // 渡されたkeyとタイトル行が一致するまで
    for (let col in keys) {
        if (keys[col] in pu_data) {
          // IDが一致したら、valueで更新する
          for (let row in tables) {
            if (pu_data["ID"] == tables[row][0]) {
              tables[row][col] = pu_data[keys[col]];
            }
          }
        }
    }
    
    // 2次元配列をシートに書き込む
    sheet.getRange(2, 1, tables.length, tables[0].length).setValues(tables);
}