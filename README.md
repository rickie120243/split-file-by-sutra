# split-file-by-sutra步驟說明:

1.將要按sutra id分別生成檔案的原資料放進/split-file-by-sutra/data的路徑目錄中。

2.開啟Command Prompt在/split-file-by-sutra/data路徑下輸入"dir/s/b *.xml>data_list.txt"。

3.在/split-file-by-sutra路徑目錄中建立/splited資料夾。

3.開啟Command Prompt於/split-file-sutra路徑中執行node splitSutra.js。

4.再到/splited資料夾開啟即可看見所有按sutra id命名的檔案。
