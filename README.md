#安裝步驟與push的github

-複製專案到自己電腦資料夾 
git clone https://github.com/pophoan/mfee44-final_project_esp.git

-建立自己的開發分支 命名規則:自己的名字 ex:hong
git checkout -b 自己的名字

-推送到github （推送的是自己的分支）

git push -u orgin 自己分支名



#接著測試client環境（確保自己在client的終端機）

-下載package.json的資料包回來
npm i 

-執行環境
npm run dev 

-查看網址能否正常顯示畫面

<img width="1179" alt="image" src="https://github.com/pophoan/mfee44-final_project_esp/assets/138667312/0a60e6a0-399a-47f5-8062-a2d28c38a9f0">









＃專案規則 client（前端部分）

##1./components資料夾 （大家管理自己開發頁面的元件,若有需要套用他人的元件,請與對方溝通了解該元件功能,確認可以在其他頁面套用才套到自己的頁面）
資料夾命名規則： ex:購物車= myCart/
<img width="414" alt="image" src="https://github.com/pophoan/mfee44-final_project_esp/assets/138667312/669ef6fa-a0c2-41f3-913b-0f3b9a840cd1">


##2./pages資料夾 （管理自己頁面layout,拼揍自己components元件在頁面等等)
資料夾命名規則：ex:購物車=cart/  ;已經有幫大家先建立基本的資料夾了
<img width="424" alt="image" src="https://github.com/pophoan/mfee44-final_project_esp/assets/138667312/4273d10c-c0c0-49e9-9756-124ed1adee89">


##3.以下為公共資料盡量不要在自己的分支動,若有需要更改裡面檔案內容,跟吉鴻溝通,由他統一將資料更新的main分支,避免公共資料污染與衝突

1./pages/_app.js
2./styles/globals.scss
3./components/layout/default-layout

##4. http://localhost:3000/style-guide 這個是我們當初figma建立的公用樣式; 色票/背景色/字體h1~h6 已經寫在global.scss全域下了 頁面上直接className套用就會有效果
<img width="1183" alt="image" src="https://github.com/pophoan/mfee44-final_project_esp/assets/138667312/1d432f51-d875-463b-9b2c-324c3bcb7f71">

##5. 待補充..



