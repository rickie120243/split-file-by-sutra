# split-file-by-sutra步驟說明:

1.將要按sutra id分別生成檔案的原資料放進/split-file-by-sutra/data的路徑目錄中。

2.開啟Command Prompt在/split-file-by-sutra/data路徑下輸入"dir/b *.xml>../data_list.txt"，即生成一個data_list檔案。

3.在/split-file-by-sutra路徑目錄中建立/splited資料夾。

4.開啟Command Prompt於/split-file-sutra路徑中執行node splitSutra.js。

5.再到/splited資料夾開啟即可看見所有按sutra id命名的檔案。
