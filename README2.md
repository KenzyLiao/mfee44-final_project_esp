##如何讓自己的分支更新最新的分支資料

需求：假設組長更新了 css 樣式在 global.scss 上並且更新到 github 專案的 dev 分支，其他組員要去更新這個最新的 glogal.scss 在自己的分支上去開發專案。

步驟 1.先將自己的分支專案進行版控

步驟 2.切換分支回 main 分支,並拉取 github 的最新 main 分支到自己電腦裡

-切回 main 分支
git checkout main

-將 github 的 main 分支更新到本地電腦的 main 分支
git pull origin main


步驟 3.切回自己的分支

git checkout 你的名字

步驟 4.用自己的分支去 merge 電腦上剛剛拉下來的 main 分支資料,就可以看到組長更新的 css 樣式在自己的分支

git merge --no-ff -m "你的名字 main" main

end
